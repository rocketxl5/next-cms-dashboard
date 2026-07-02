// components/ui/dialog/Content.tsx

import * as React from 'react';

import { cn } from '@/lib/utils';

type DialogContentProps = React.HTMLAttributes<HTMLDivElement>;

export function Content({
  children,
  className,
  ...props
}: DialogContentProps) {
return (
    <div
      className={cn(
        'w-full',
        'max-w-lg',
        'rounded-lg',
        'border border-base',
        'bg-surface',
        'shadow-xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}