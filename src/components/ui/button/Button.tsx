'use client';

import * as React from 'react';
import { buttonVariants, type ButtonVariants } from '@/lib/ui/variants';
import { cn } from '@/lib/utils/cn';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = 'button', ...props }, ref) => {
    const {
      variant,
      layout,
      height,
      width,
      paddingX,
      textSize,
      radius,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          buttonVariants({
            variant,
            layout,
            height,
            width,
            paddingX,
            textSize,
            radius,
          }),
          className,
        )}
        {...rest}
      />
    );
  },
);

Button.displayName = 'Button';