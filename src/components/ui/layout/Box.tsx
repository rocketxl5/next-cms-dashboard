import * as React from 'react';
import { boxVariants, type BoxVariants } from '@/lib/ui/variants';
import { cn } from '@/lib/utils';

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>, BoxVariants {}

export function Box({ className, ...props }: BoxProps) {
  const {
    display,
    direction,
    align,
    justify,
    gap,
    layout,
    width,
    height,
    padding,
    paddingY,
    border,
    radius,
    surface,
    position,
    interactive,
    ...rest
  } = props;

  return (
    <div
      className={cn(
        boxVariants({
          display,
          direction,
          align,
          justify,
          gap,
          layout,
          width,
          height,
          padding,
          paddingY,
          border,
          radius,
          surface,
          position,
          interactive,
        }),
        className,
      )}
      {...rest}
    />
  );
}
