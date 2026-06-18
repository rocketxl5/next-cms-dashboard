import { cn } from '@/lib/utils';
import { responsiveAdapters } from '@/lib/ui/tokens';

type ContentShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function ContentShell({ children, className }: ContentShellProps) {
  return (
    <div className={cn(responsiveAdapters.shell.content, className)}>
      {children}
    </div>
  );
}
