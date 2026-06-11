import { cn } from '@/lib/utils';
import { responsive } from '@/lib/ui/tokens';

type ContentShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function ContentShell({ children, className }: ContentShellProps) {
  return (
    <div className={cn(responsive.shell.content, className)}>{children}</div>
  );
}
