import { redirect } from 'next/navigation';
import { getSession } from '@/lib/server';
import { AppShell } from '@/components/layout-primitives';
import { DashboardRole } from '@/types/shared';
import { DashboardHeader, DashboardSidebar, DashboardMain } from './components';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await getSession();

  if (!session) redirect('/auth/signin');

  return (
    <AppShell>
      <DashboardSidebar role={session.user.role as DashboardRole} />
      <div className="flex flex-col flex-1">
        <DashboardHeader />
        <DashboardMain>{children}</DashboardMain>
      </div>
    </AppShell>
  );
}
