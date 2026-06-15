'use client';

import { useState, useCallback } from 'react';

export function useMobileMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setOpen(true);
  }, []);

  return {
    open,
    toggleMenu,
    closeMenu,
    openMenu,
    setOpen,
  };
}