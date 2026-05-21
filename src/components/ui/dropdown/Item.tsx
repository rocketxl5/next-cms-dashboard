'use client';

import * as React from 'react';

import { Button } from '../button';

import { useDropdown } from '@/providers/hooks';
import { composeEventHandlers } from '@/lib/utils';

import { ButtonVariants } from '@/lib/ui/variants';

type ItemProps = {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  onSelect?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants;

export function Item({
  children,
  className = '',
  variant = 'info',
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
      height="sm"
      variant={variant}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
}