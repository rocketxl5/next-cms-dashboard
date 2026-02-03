import { redirect } from 'next/navigation';
import { getSession } from '@/lib/server';
import { AppShell, HeaderSlot, MainSlot } from '@/components/layout-primitives';
import { AccountHeader } from './components/AccountHeader';

type AccountLayoutProps = {
  children: React.ReactNode;
};

export default async function AccountLayout({ children }: AccountLayoutProps) {
  const session = await getSession();

  if (!session) redirect('/auth/signin');

  return (
    <AppShell>
      <div className="flex flex-col flex-1 overflow-hidden">
        <HeaderSlot>
          <AccountHeader />
        </HeaderSlot>
        <MainSlot>{children}</MainSlot>
      </div>
    </AppShell>
  );
}
