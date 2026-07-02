// components/ui/dialog/Footer.tsx

import * as React from 'react';

import { cn } from '@/lib/utils';

type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

export function Footer({
  className,
  children,
  ...props
}: DialogFooterProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2',
        'border-t border-base',
        'px-4 py-3',

        'sm:flex-row',
        'sm:justify-end',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
