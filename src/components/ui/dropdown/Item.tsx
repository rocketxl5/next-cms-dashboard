'use client';

import * as React from 'react';

import { Button } from '../button';

import { useDropdown } from '@/providers/hooks';

import { cn } from '@/lib/utils';
import { composeEventHandlers } from '@/lib/utils';

type ItemProps = {
  children: React.ReactNode;
  className?: string;
  onSelect?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Item({
  children,
  className,
  onSelect,
  onClick,
  ...props
}: ItemProps) {
  const { setOpen } = useDropdown();

  const handleClick = composeEventHandlers(onClick, () => {
    onSelect?.();
    setOpen(false);
  });

  return (
    <Button
      onClick={handleClick}
      className={cn(
        // layout
        'flex w-full items-center rounded-md px-3 py-2 text-sm',

        // interaction
        'transition-colors hover:bg-muted',
        'focus:outline-none focus:bg-muted',

        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}