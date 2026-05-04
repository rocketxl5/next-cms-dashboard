'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  isValidElement,
  cloneElement,
} from 'react';

import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

type CollapsibleContextValue = {
  open: boolean;
  setOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  toggle: () => void;
};

export const CollapsibleContext = createContext<CollapsibleContextValue | null>(null);

/* -------------------------------------------------------------------------------------------------
 * Provider
 * -----------------------------------------------------------------------------------------------*/

export type CollapsibleProviderProps = {
  children: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function CollapsibleProvider({
  children,
  defaultOpen = false,
  open,
  onOpenChange,
}: CollapsibleProviderProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  const isControlled = open !== undefined;
  const currentOpen = isControlled ? open : internalOpen;

  const setOpen = useCallback(
    (value: boolean | ((prev: boolean) => boolean)) => {
      const next = typeof value === 'function' ? value(currentOpen) : value;

      if (!isControlled) setInternalOpen(next);

      onOpenChange?.(next);
    },
    [currentOpen, isControlled, onOpenChange],
  );

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, [setOpen]);

  return (
    <CollapsibleContext.Provider
        value={{open: currentOpen, setOpen, toggle}}
    >
    {children}
    </CollapsibleContext.Provider>
  )
}

