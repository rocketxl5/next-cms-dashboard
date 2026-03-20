import React from 'react';
import { cn } from '@/lib/utils';
import { inputVariants, type InputVariants } from '@/lib/ui/variants';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & InputVariants;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = 'text', size, border, layout, ...props }: InputProps,
    ref,
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(inputVariants({ size, border, layout }), className)}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
