import { AppShell, HeaderSlot, MainSlot } from '@/components/layout-primitives';
import { DashboardHeader, DashboardSidebar } from './components';

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
        <MainSlot>{children}</MainSlot>
      </div>
    </AppShell>
  );
}
