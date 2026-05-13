import * as React from 'react';

import { cn } from '@/lib/utils';
import {
  titleVariants,
  type TitleVariants,
} from '@/lib/ui/variants';

import { TitleElement } from '@/types/ui';

type TitleProps<T extends React.ElementType = 'h2'> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & TitleVariants &
  Omit<
    React.ComponentPropsWithoutRef<T>,
    keyof TitleVariants | 'as' | 'className' | 'children'
  >;

export function Title<T extends React.ElementType = 'h2'>({
  as,
  size,
  align,
  weight,
  lineHeight,
  truncate,
  className,
  children,
  ...props
}: TitleProps<T>) {
  const Component = (as || 'h2') as TitleElement;

  return (
    <Component
      className={cn(
        titleVariants({
          size,
          align,
          weight,
          lineHeight,
          truncate,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}