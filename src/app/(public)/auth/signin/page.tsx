'use client';

// handleSigninSuccess:
// 1️⃣ Sync theme for SSR + provider
// setUserTheme(user.theme as Theme);
// 2️⃣ Refresh server components so layouts & RootLayout pick up session
// Triggers RootLayout → getTheme → ThemeProvider
// router.refresh();
// 3️⃣ Determine redirect path based on role or "from" query
// const from = searchParams.get('from');
// const pathname = getRedirectPathname(user.role, from);
// 4️⃣ Navigate
// router.replace(pathname);

import { useRouter, useSearchParams } from 'next/navigation';
import { SigninForm } from './SigninForm';
import { getRedirectPathname } from '@/lib/shared';
import { Theme } from '@/types/enums/theme';
import { useTheme } from '@/providers';
import { SessionUser } from '@/types/shared';

export default function SigninPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUserTheme } = useTheme();

  const handleSigninSuccess = (user: SessionUser) => {
    setUserTheme(user.theme as Theme);
    router.refresh();
    const from = searchParams.get('from');
    const pathname = getRedirectPathname(user.role, from);
    router.replace(pathname);
  };

  return <SigninForm onSuccess={handleSigninSuccess} />;
}
