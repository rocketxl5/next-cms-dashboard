'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { SigninForm } from '../_components/forms/SigninForm';
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
