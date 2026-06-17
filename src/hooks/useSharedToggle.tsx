'use client';

import { useState, useEffect, useRef } from 'react';

type UseSharedToggleProps<T extends string> = {
  initial?: T | null;
};

export function useSharedToggle<T extends string>(
  options?: UseSharedToggleProps<T>,
) {
  const [activeId, setActiveId] = useState<T | null>(options?.initial ?? null);

  const refs = useRef<Record<string, HTMLElement | null>>({});

  const openId = (id: T) => setActiveId(id);
  const closeId = () => setActiveId(null);

  const toggle = (id: T) => setActiveId((prev) => (prev === id ? null : id));

  const isOpen = (id: T) => activeId === id;

  const register = (id: T) => {
    const open = isOpen(id);

    return {
      open,
      onToggle: () => toggle(id),
      onOpen: () => openId(id),
      onClose: closeId,
      ref: (node: HTMLElement | null) => {
        refs.current[id] = node;
      },
    };
  };

  // outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!activeId) return;

      const activeElement = refs.current[activeId];

      if (!activeElement) return;

      if (!activeElement.contains(e.target as Node)) {
        closeId();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeId]);

  // focus cleanup (single source of truth)
  useEffect(() => {
    if (activeId !== null) return;

    // blur previously active element
    const el = Object.values(refs.current).find(Boolean);

    if (!el) return;

    requestAnimationFrame(() => {
      el.blur?.();
    });
  }, [activeId]);

  return {
    toggle,
    isOpen,
    register,
  };
}
