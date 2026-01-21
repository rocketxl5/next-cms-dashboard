import { AppShell, HeaderSlot } from '@/components/layout-primitives';
import { DashboardHeader, DashboardSidebar, DashboardMain } from './components';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <AppShell>
      <DashboardSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <HeaderSlot>
          <DashboardHeader />
        </HeaderSlot>
        <DashboardMain />
      </div>
    </AppShell>
  );
}
