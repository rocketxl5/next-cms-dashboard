import React from 'react';

import { cn } from '@/lib/utils';
import { inputVariants, type InputVariants } from '@/lib/ui/variants';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  InputVariants & { error?: boolean };

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      variant,
      layout,
      height,
      paddingX,
      paddingY,
      border,
      ...props
    }: InputProps,
    ref,
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          inputVariants({
            variant,
            layout,
            height,
            paddingX,
            paddingY,
            border,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
