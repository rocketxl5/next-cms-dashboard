import React from 'react';
import { cn } from '@/lib/utils';

type LabelProps = {
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  className?: string;
};

export function Label({
  htmlFor,
  children,
  disabled = false,
  className,
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'block text-sm font-medium mb-1',
        'text-gray-900 dark:text-gray-100',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      {children}
    </label>
  );
}
