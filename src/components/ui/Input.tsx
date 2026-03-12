import React from 'react';
import { cn } from '@/lib/utils';
import { InputProps } from '@/types/form';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          'w-full rounded-md border px-3 py-2 text-sm',
          'bg-muted text-foreground border-muted-foreground',
          'focus:outline-none focus:ring-2 focus:ring-primary',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";