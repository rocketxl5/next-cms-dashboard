import { responsiveAdapters } from '@/lib/ui/tokens';

type ContentShellProps = {
  children: React.ReactNode;
};

export function ContentShell({ children }: ContentShellProps) {
  return <div className={responsiveAdapters.shell.content}>{children}</div>;
}
