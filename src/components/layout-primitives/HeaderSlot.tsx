import { cn } from '@/lib/utils';
import { responsive } from '@/lib/ui/tokens';

type HeaderSlotProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeaderSlot({ children, className }: HeaderSlotProps) {
  return (
    <header className={cn(responsive.slot.header, className)}>
      {children}
    </header>
  );
}
