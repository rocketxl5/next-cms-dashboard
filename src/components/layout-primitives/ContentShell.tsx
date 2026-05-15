import { Box } from '@/components/ui';

import { cn } from '@/lib/utils';

type ContentShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function ContentShell({
  children,
  className,
}: ContentShellProps) {
  return (
    <div
      className={cn(
        'flex flex-1 overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  );
}