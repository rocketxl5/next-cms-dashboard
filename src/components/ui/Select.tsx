import React from 'react';

import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  selectVariants,
  SelectVariants,
} from '@/lib/ui/variants/select.variants';
import { selectAdapters } from '@/lib/ui/tokens';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> &
  SelectVariants & {
    wrapperClassName?: string;
  };

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      wrapperClassName,
      padding,
      height,
      border,
      layout,
      children,
      radius,
      variant,
      focus,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn('relative', wrapperClassName)}>
        <select
          ref={ref}
          className={cn(
            selectVariants({
              padding,
              height,
              border,
              layout,
              radius,
              variant,
              focus,
            }),
            className,
          )}
          {...props}
        >
          {children}
        </select>
        {/* arrow */}
        <ChevronDown
          className={cn(
            'pointer-events-none absolute top-1/2 -translate-y-1/2 text-foreground',
            selectAdapters[padding ?? 'md'].icon,
          )}
        />
      </div>
    );
  },
);

Select.displayName = 'Select';
