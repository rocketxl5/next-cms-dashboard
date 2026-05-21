'use client';

import { useRouter } from 'next/navigation';

import { ForgotPasswordForm } from '../_components/forms';

export default function ForgotPasswordPage() {
  const router = useRouter();

  const handleSuccess = () => {
    router.replace('/reset-password');
  };

  return (
    <ForgotPasswordForm onSuccess={handleSuccess} />
  );
}