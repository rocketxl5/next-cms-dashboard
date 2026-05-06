'use client';

import { useContext } from 'react';
import { DropdownContext } from '../contexts/DropdownContext';

export function useDropdown() {
  const ctx = useContext(DropdownContext);

  if (!ctx) {
    throw new Error('useDropdown must be used within DropdownProvider');
  }

  return ctx;
}