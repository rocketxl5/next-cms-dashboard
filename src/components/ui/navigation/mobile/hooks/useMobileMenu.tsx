'use client';

import { useState, useCallback } from 'react';

export function useMobileMenu() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setOpen(true);
  }, []);

  return {
    open,
    toggle,
    close,
    openMenu,
    setOpen,
  };
}