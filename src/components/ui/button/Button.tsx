import * as React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
     ({ type = 'button', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={className}
        {...props}
      >
        {children}
      </button>
    );
  }
)

Button.displayName = 'Button';