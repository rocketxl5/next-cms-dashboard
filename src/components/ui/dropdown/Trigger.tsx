'use client';

import { Button } from '../button';

import { useDropdown } from '@/providers/hooks';

import { ButtonVariants } from '@/lib/ui/variants';

type TriggerProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants;

export function Trigger({ children, disabled, ...props }: TriggerProps) {
  const { open, toggle, triggerRef } = useDropdown();

  console.log('open', open);

  return (
    <Button
      ref={triggerRef as React.Ref<HTMLButtonElement>}
      variant="control"
      textWeight="normal"
      height="md"
      disabled={disabled}
      onClick={toggle}
      data-state={open ? 'open' : 'closed'}
      {...props}
    >
      {children}
    </Button>
  );
}
