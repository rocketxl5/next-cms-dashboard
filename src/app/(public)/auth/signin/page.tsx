// Architecture
//
// Page (server)
//  └─ Suspense
//      └─ SigninForm (client, owns logic)
//      └─ SigninSkeleton

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import SigninForm from './SigninForm';
import { getRedirectPathname } from '@/lib/shared';
import { Theme } from '@/types/enums/theme';
import { useTheme } from '@/providers/ThemeProvider';
import { SessionUser } from '@/types/shared';

export default function SigninPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUserTheme } = useTheme();

  return (
    <SigninForm
      onSuccess={(user: SessionUser) => {
        // 1️⃣ Sync theme for SSR + provider
        setUserTheme(user.theme as Theme);

        // 2️⃣ Refresh server components so layouts & RootLayout pick up session
        router.refresh(); // Triggers RootLayout → getTheme → ThemeProvider

        // 3️⃣ Determine redirect path based on role or "from" query
        const from = searchParams.get('from');
        const pathname = getRedirectPathname(user.role, from);

        // 4️⃣ Navigate
        router.replace(pathname);
      }}
    />
  );
}
