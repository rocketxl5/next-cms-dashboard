import Providers from './providers';
import { getTheme } from '@/lib/server';
import './globals.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const theme = await getTheme();

  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <body className="min-h-screen">
        <Providers initialTheme={theme}>{children}</Providers>
      </body>
    </html>
  );
}
