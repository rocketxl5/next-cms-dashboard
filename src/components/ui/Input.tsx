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
          'bg-white text-black border-gray-300',
          'focus:outline-none focus:ring-2 focus:ring-blue-500',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'dark:bg-zinc-900 dark:text-white dark:border-zinc-700',
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";