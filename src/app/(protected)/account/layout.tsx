import { AppShell, HeaderSlot, MainSlot } from '@/layout-primitives';
import { AccountHeader } from './components/AccountHeader';
type AccountLayoutProps = {
  children: React.ReactNode;
};

export default async function AccountLayout({ children }: AccountLayoutProps) {
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
