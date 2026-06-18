import { cn } from '@/lib/utils';
import { responsiveAdapters } from '@/lib/ui/tokens';

type MainSlotProps = {
  children: React.ReactNode;
  className?: string;
};

export function MainSlot({ children, className }: MainSlotProps) {
  return (
    <main className={cn(responsiveAdapters.slot.main, className)}>
      {children}
    </main>
  );
}
