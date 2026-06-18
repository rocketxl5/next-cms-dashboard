import { cn } from '@/lib/utils';
import { responsiveAdapters } from '@/lib/ui/tokens';

type SideSlotProps = {
  children: React.ReactNode;
  className?: string;
};

export function SideSlot({ children, className }: SideSlotProps) {
  return (
    <aside
      className={cn(
        responsiveAdapters.visibility.desktopUp,
        responsiveAdapters.slot.sidebar,
        className,
      )}
    >
      {children}
    </aside>
  );
}
