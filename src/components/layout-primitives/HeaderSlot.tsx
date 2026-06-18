import { cn } from '@/lib/utils';
import { responsiveAdapters } from '@/lib/ui/tokens';

type HeaderSlotProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeaderSlot({ children, className }: HeaderSlotProps) {
  return (
    <header className={cn(responsiveAdapters.slot.header, className)}>
      {children}
    </header>
  );
}
