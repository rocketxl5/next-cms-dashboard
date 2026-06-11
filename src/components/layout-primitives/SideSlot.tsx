import { cn } from '@/lib/utils';
import { responsive } from '@/lib/ui/tokens';

type SideSlotProps = {
  children: React.ReactNode;
  className?: string;
};

export function SideSlot({ children, className }: SideSlotProps) {
  return (
    <aside
      className={cn(
        responsive.visibility.desktopUp,
        responsive.slot.sidebar,
        className,
      )}
    >
      {children}
    </aside>
  );
}
