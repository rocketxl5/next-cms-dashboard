'use client';

import { DropdownContext } from './contexts/DropdownContext';
import { ReactNode, useEffect, useRef, useState } from 'react';

export type DropdownProviderProps = {
  children: ReactNode;
};

export function DropdownProvider({ children }: DropdownProviderProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => setOpen((o) => !o);

  // close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;

      if (!triggerRef.current?.contains(target) && !contentRef.current?.contains(target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [open]);

  return (
    <DropdownContext.Provider value={{ open, setOpen, toggle, triggerRef, contentRef }}>
      {children}
    </DropdownContext.Provider>
  );
}
