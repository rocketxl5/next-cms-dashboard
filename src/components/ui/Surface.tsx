import * as React from 'react';
import { surfaceVariants, type SurfaceVariants } from '@/lib/ui/variants/surface.variants';
import { cn } from '@/lib/utils';

export interface _BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SurfaceVariants {}

export function Surface({
  className,

  // only allowed token props
  display,
  surface,
  border,
  radius,
  padding,

  ...rest
}: _BoxProps) {
  return (
    <div
      className={cn(
        surfaceVariants({
          display,
          surface,
          border,
          radius,
          padding,
        }),
        className,
      )}
      {...rest}
    />
  );
}