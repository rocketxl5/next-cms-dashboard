'use client';

import { createContext, type ReactElement } from 'react';

/**
 * Controls injected into every dialog instance.
 *
 * close(value)
 * - Resolves the dialog promise with a value.
 *
 * dismiss()
 * - Resolves the dialog promise with null.
 */
export type DialogControls<T = unknown> = {
  close: (value: T) => void;
  dismiss: () => void;
};

/**
 * Props passed to the render function when opening a dialog.
 */
export type DialogRendererProps<T = unknown> = DialogControls<T>;

/**
 * Dialog configuration used by openDialog().
 *
 * render()
 * - Receives dialog controls.
 * - Must return a React element.
 */
export type OpenDialogOptions<T = unknown> = {
  render: (props: DialogRendererProps<T>) => ReactElement;
};

/**
 * Public dialog API exposed through context.
 */
export type DialogContextValue = {
  /**
   * Opens a dialog and returns a promise that resolves when:
   *
   * - close(value) is called
   * - dismiss() is called
   *
   * close(value) -> resolves with value
   * dismiss()    -> resolves with null
   */
  openDialog: <T = unknown>(options: OpenDialogOptions<T>) => Promise<T | null>;
};

export const DialogContext = createContext<DialogContextValue | null>(null);
