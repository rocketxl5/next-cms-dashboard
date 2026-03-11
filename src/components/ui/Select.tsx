import React from 'react';
import { cn } from '@/lib/utils';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  wrapperClassName?: string;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, wrapperClassName, children, ...props }, ref) => {
    return (
      <div className={cn('relative', wrapperClassName)}>
        <select
          ref={ref} // <-- forward ref for RHF
          className={cn(
            `
          appearance-none
          w-full
          rounded-md
          border
          border-border
          bg-background
          text-foreground
          px-3
          py-2
          pr-8
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-ring
          disabled:opacity-50
          disabled:pointer-events-none
          `,
            className,
          )}
          {...props}
        >
          {children}
        </select>
        {/* arrow */}
        <span
          className="
          pointer-events-none
          absolute
          right-2
          top-1/2
          -translate-y-1/2
          text-muted-foreground
        "
        >
          ▼
        </span>
      </div>
    );
  },
);

Select.displayName = 'Select';
