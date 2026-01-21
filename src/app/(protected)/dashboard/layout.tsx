import { AppShell } from '@/components/layout-primitives';
import { DashboardHeader, DashboardSidebar, DashboardMain } from './components';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AppShell>
      <DashboardSidebar />
      <div className="flex flex-col flex-1">
        <DashboardHeader />
        <DashboardMain>{children}</DashboardMain>
      </div>
    </AppShell>
  );
}
