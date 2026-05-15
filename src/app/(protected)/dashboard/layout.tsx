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

import { DashboardRole } from '@/types/shared';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) redirect('/signin');

  return (
    <AppShell>
      <HeaderSlot>
        <DashboardHeader />
      </HeaderSlot>

      <ContentShell>
        <SideSlot>
          <DashboardSideBar role={session.user.role as DashboardRole} />
        </SideSlot>

        <MainSlot>
          <DashboardMain>{children}</DashboardMain>
        </MainSlot>
      </ContentShell>
    </AppShell>
  );
}