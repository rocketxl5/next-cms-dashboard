import { cn } from '@/lib/utils';

export function SideSlot({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <aside className={cn('w-64 shrink-0 border-r overflow-y-auto', className)}>
      {children}
    </aside>
  );
}
