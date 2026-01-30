import * as React from 'react';
import {
  buttonVariants,
  type ButtonVariants,
} from '@/lib/ui/variants/button-variants';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', variant, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={buttonVariants({ variant, className })}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
