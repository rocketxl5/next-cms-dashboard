import { redirect } from 'next/navigation';
import { Footer, Header } from '@/components/ui';
import { getRedirectPathname, getSession } from '@/lib/server';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function PublicLayout({ children }: RootLayoutProps) {
  const session = await getSession();

  if (session) redirect(getRedirectPathname(session.user.role));

  return (
    <>
      <Header context="public" />
      <div className="min-h-screen mx-auto max-w-5xl">{children}</div>
      <Footer />
    </>
  );
}
