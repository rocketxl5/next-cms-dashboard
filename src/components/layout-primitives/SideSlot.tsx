import { cn } from '@/lib/utils';
import { responsiveAdapters } from '@/lib/ui/tokens';

type SideSlotProps = {
  children: React.ReactNode;
};

export function SideSlot({ children }: SideSlotProps) {
  return <aside className={responsiveAdapters.slot.sidebar}>{children}</aside>;
}
