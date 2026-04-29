import * as React from 'react';
import { boxVariants, type BoxVariants } from '@/lib/ui/variants';
import { cn } from '@/lib/utils';

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>, BoxVariants {}

export function Box({ className, ...props }: BoxProps) {
  const {
    layout,
    surface,
    border,
    radius,
    padding,
    paddingX,
    paddingY,
    gap,
    width,
    height,
    ...rest
  } = props;

  return (
    <div
      className={cn(
        boxVariants({
          layout,
          surface,
          border,
          radius,
          padding,
          paddingX,
          paddingY,
          gap,
          width,
          height,
        }),
        className,
      )}
      {...rest}
    />
  );
}
