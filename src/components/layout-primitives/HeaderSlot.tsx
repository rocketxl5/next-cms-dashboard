import { responsiveAdapters } from '@/lib/ui/tokens';

type HeaderSlotProps = {
  children: React.ReactNode;
};

export function HeaderSlot({ children }: HeaderSlotProps) {
  return <header className={responsiveAdapters.slot.header}>{children}</header>;
}
