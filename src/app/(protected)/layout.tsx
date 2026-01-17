import { redirect } from 'next/navigation';
import { getSession } from '@/lib/server';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function ProtectedLayout({ children }: RootLayoutProps) {
  const session = await getSession();

  if (!session) redirect('/auth/signin');

  // Layout-specific UI is handled in nested layouts
  return <>{children}</>;
}
