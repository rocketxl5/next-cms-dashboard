import React from 'react';
import { cn } from '@/lib/utils';
import {
  selectVariants,
  SelectVariants,
} from '@/lib/ui/variants/select.variants';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> &
  SelectVariants & {
    wrapperClassName?: string;
  };

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      wrapperClassName,
      size,
      border,
      layout,
      children,
      radius,
      variant,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn('relative', wrapperClassName)}>
        <select
          ref={ref}
          className={cn(
            selectVariants({ size, border, layout, radius, variant }),
            className,
          )}
          {...props}
        >
          {children}
        </select>

        {/* arrow */}
        <span
          className={cn(
            'pointer-events-none absolute top-1/2 -translate-y-1/2 text-muted-foreground',
            {
              sm: 'right-2 text-xs',
              md: 'right-2.5 text-sm',
              lg: 'right-3 text-base',
            }[size ?? 'md'],
          )}
        >
          ▼
        </span>
      </div>
    );
  },
);

Select.displayName = 'Select';
