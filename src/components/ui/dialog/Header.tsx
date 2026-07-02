// components/ui/dialog/Header.tsx

import * as React from 'react';

import { cn } from '@/lib/utils';

type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export function Header({
  className,
  children,
  ...props
}: DialogHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between',
        'border-b border-base',
        'px-4 py-3',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
