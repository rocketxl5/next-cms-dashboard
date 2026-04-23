'use client';

import { useState, useEffect, useRef } from 'react';

type UseSharedToggleProps<T extends string> = {
  initial?: T | null;
};

export function useSharedToggle<T extends string>(
  options?: UseSharedToggleProps<T>,
) {
  const [activeId, setActiveId] = useState<T | null>(options?.initial ?? null);

  // store refs for each id
  const refs = useRef<Record<string, HTMLElement | null>>({});

  const open = (id: T) => setActiveId(id);

  const close = () => setActiveId(null);

  const toggle = (id: T) => {
    setActiveId((prev) => prev === id ? null : id);
  }

  const isOpen = (id: T) => activeId === id;

  const register = (id: T) => ({
    isOpen: isOpen(id),
    onToggle: () => toggle(id),
    onOpen:() => open(id),
    onClose: close,
    ref: (node: HTMLElement | null) => {
        refs.current[id] = node;
    }
  });

  // click outside handler
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
        if(!activeId) return;

        const activeElement = refs.current[activeId];

        if(!activeElement) return;
        
        // if clicked element is not child of parent element (i.e. DataSelector)
        if(!activeElement.contains(e.target as Node)) {
            close();
        }
    }

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [activeId])

  return {
    activeId,
    open,
    close,
    toggle,
    isOpen,
    register,
  }
}
