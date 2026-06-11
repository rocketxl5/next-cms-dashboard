import { cn } from '@/lib/utils';
import { responsive } from '@/lib/ui/tokens';

type MainSlotProps = {
  children: React.ReactNode;
  className?: string;
};

export function MainSlot({ children, className }: MainSlotProps) {
  return (
    <main className={cn(responsive.slot.main, className)}>{children}</main>
  );
}
