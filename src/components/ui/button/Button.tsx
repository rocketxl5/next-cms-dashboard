'use client';

import * as React from 'react';

import { cn } from '@/lib/utils/cn';
import { buttonVariants, type ButtonVariants } from '@/lib/ui/variants';

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
      textWeight,
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
            textWeight,
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