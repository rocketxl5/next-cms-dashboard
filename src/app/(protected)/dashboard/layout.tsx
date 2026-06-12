import { redirect } from 'next/navigation';

import {
  AppShell,
  HeaderSlot,
  MainSlot,
  SideSlot,
  ContentShell,
} from '@/components/layout-primitives';

import { DashboardHeader, DashboardSideBar, DashboardMain } from './components';

import { getSession } from '@/lib/server';
import { allowedDashboardNav } from './components/_lib/allowedDashboardNav';

import { DashboardRole } from '@/types/shared';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) redirect('/signin');

  const role = session.user.role as DashboardRole;

  const navItems = allowedDashboardNav(role);

  return (
    <AppShell>
      <HeaderSlot>
        <DashboardHeader navItems={navItems} />
      </HeaderSlot>

      <ContentShell>
        <SideSlot>
          <DashboardSideBar navItems={navItems} />
        </SideSlot>

        <MainSlot>
          <DashboardMain>{children}</DashboardMain>
        </MainSlot>
      </ContentShell>
    </AppShell>
  );
}