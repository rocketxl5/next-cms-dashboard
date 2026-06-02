import { redirect } from 'next/navigation';

import {
  AppShell,
  HeaderSlot,
  MainSlot,
  ContentShell,
} from '@/components/layout-primitives';

import { AccountHeader, AccountMain } from './components';
import { getSession } from '@/lib/server';

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) redirect('/signin');

  return (
    <AppShell>
      <HeaderSlot>
        <AccountHeader />
      </HeaderSlot>

      <ContentShell>
        <MainSlot>
          <AccountMain>{children}</AccountMain>
        </MainSlot>
      </ContentShell>
    </AppShell>
  );
}
