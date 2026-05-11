import { redirect } from 'next/navigation';
import { getSession } from '@/lib/server';
import { AppShell, HeaderSlot } from '@/components/layout-primitives';
import { AccountHeader } from './components/AccountHeader';

type AccountLayoutProps = {
  children: React.ReactNode;
};

export default async function AccountLayout({ children }: AccountLayoutProps) {
  const session = await getSession();

  if (!session) redirect('/signin');

  return (
    <AppShell>
      <div className="flex flex-col flex-1 overflow-hidden">
        <HeaderSlot>
          <AccountHeader />
        </HeaderSlot>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </AppShell>
  );
}
