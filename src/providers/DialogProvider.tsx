'use client';

import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

import { DialogContext, OpenDialogOptions } from './contexts/DialogContext';


/* -------------------------------------------------------------------------- */
/*                                   State                                    */
/* -------------------------------------------------------------------------- */

/**
 * Currently mounted dialog.
 *
 * The provider stays intentionally generic:
 * it only knows how to render dialogs,
 * not what kind of dialogs they are.
 */
type ActiveDialog = {
  element: ReactNode;
};

/* -------------------------------------------------------------------------- */
/*                                Provider                                    */
/* -------------------------------------------------------------------------- */

export function DialogProvider({ children }: { children: ReactNode }) {
  /**
   * Stores the active promise resolver for the currently open dialog.
   *
   * Only one dialog is supported at a time.
   */

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resolverRef = useRef<((value: any) => void) | null>(null);

  /**
   * Currently rendered dialog element.
   */
  const [dialog, setDialog] = useState<ActiveDialog | null>(null);

  /**
   * Clears the active dialog and resolver reference.
   */
  const cleanup = useCallback(() => {
    resolverRef.current = null;
    setDialog(null);
  }, []);

  /**
   * Opens a dialog and returns a promise that resolves
   * when the dialog is closed or dismissed.
   */
  const openDialog = useCallback(
    <T,>({ render }: OpenDialogOptions<T>) => {
      /**
       * Prevent multiple dialogs from opening simultaneously.
       *
       * You could alternatively implement:
       * - dialog stacking
       * - queueing
       * - replacement
       *
       * But for admin dashboards,
       * single-dialog behavior is usually preferable.
       */
      if (resolverRef.current) {
        throw new Error(
          'A dialog is already open. Only one dialog may be active at a time.',
        );
      }

      return new Promise<T | null>((resolve) => {
        resolverRef.current = resolve;

        /**
         * Resolves the promise with a value.
         */
        const close = (value: T) => {
          resolve(value);
          cleanup();
        };

        /**
         * Resolves the promise with null.
         */
        const dismiss = () => {
          resolve(null);
          cleanup();
        };

        /**
         * Render the dialog element with injected controls.
         */
        const element = render({
          close,
          dismiss,
        });

        setDialog({
          element,
        });
      });
    },
    [cleanup],
  );

  /**
   * Memoized context value to prevent unnecessary rerenders.
   */
  const value = useMemo(
    () => ({
      openDialog,
    }),
    [openDialog],
  );

  return (
    <DialogContext.Provider value={value}>
      {children}

      {/* Active dialog portal/render target */}
      {dialog?.element}
    </DialogContext.Provider>
  );
}
