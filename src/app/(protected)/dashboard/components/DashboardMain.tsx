import { MainSlot } from '@/components/layout-primitives';

type DashboardMainProps = {
  children: React.ReactNode;
};

export function DashboardMain({ children }: DashboardMainProps) {
  return <MainSlot>{children}</MainSlot>;
}
