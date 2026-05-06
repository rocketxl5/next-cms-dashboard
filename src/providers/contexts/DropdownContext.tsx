'use client';

import { createContext, RefObject } from 'react';

export type DropdownContextValue = {
  open: boolean;
  setOpen: (value: boolean) => void;
  toggle: () => void;
  triggerRef: RefObject<HTMLElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
};

export const DropdownContext = createContext<DropdownContextValue | null>(null);
