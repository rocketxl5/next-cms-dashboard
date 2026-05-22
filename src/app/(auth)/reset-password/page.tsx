'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { ResetPasswordForm } from '../_components/forms/ResetPasswordForm';

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const isValidToken = typeof token === 'string' && token.trim().length > 0;

  useEffect(() => {
    if (!isValidToken) {
      router.replace('/forgot-password');
    }
  }, [isValidToken, router]);

  const handleResetSuccess = () => {
    router.replace('/signin');
  };

  if (!isValidToken) return null;

  return <ResetPasswordForm token={token} onSuccess={handleResetSuccess} />;
}