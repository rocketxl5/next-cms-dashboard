'use client';

import { createContext } from 'react';

type CollapsibleContextValue = {
  open: boolean;
  setOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  toggle: () => void;
};

export const CollapsibleContext = createContext<CollapsibleContextValue | null>(
  null,
);
