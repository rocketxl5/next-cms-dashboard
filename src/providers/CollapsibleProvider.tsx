'use client';

import { useState, ReactNode, useCallback } from 'react';

import { CollapsibleContext } from './contexts/CollapsibleContex';

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

