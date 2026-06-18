'use client';

import { ReactNode } from 'react';

import { useDropdown } from '@/providers/hooks';

import { cn } from '@/lib/utils';

type ContentProps = {
  children: ReactNode;
  className?: string;
  align?: 'start' | 'end';
  side?: 'bottom' | 'right';
};

export function Content({
  children,
  className,
  align = 'start',
  side = 'bottom',
}: ContentProps) {
  const { open, contentRef } = useDropdown();

  return (
    <div
      ref={contentRef}
      data-state={open ? 'open' : 'closed'}
      className={cn(
        'absolute z-50',

        // 🔥 POSITIONING
        side === 'bottom' && [
          'top-full mt-2',
          align === 'end' ? 'right-0' : 'left-0',
        ],

        side === 'right' && [
          'left-full ml-2',
          align === 'end' ? 'bottom-0' : 'top-0',
        ],

        // base styles
        'min-fit w-max p-1 rounded-md border border-base bg-[hsl(var(--background))] shadow-md',

        // animation
        'transition-all duration-150 ease-out origin-top',
        'data-[state=closed]:opacity-0 data-[state=closed]:scale-95',
        'data-[state=open]:opacity-100 data-[state=open]:scale-100',

        // prevent interaction when closed
        'data-[state=closed]:pointer-events-none',

        className,
      )}
    >
      {children}
    </div>
  );
}
