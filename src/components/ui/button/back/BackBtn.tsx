'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '../Button';

type GoBackBtnProps = {
  label?: string;
  className?: string;
  fallbackHref?: string;
  size?: number;
};

export function GoBackBtn({
  label = 'Go back',
  className,
  fallbackHref = '/',
  size = 20
}: GoBackBtnProps) {
  const router = useRouter();

  function handleBack() {
    // Prevent dead-end when there is no history entry
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  }
  return (
    <Button
      onClick={handleBack}
      variant="link"
      className={className}
    >
      <ArrowLeft size={size} /> <span>{label}</span>
    </Button>
  );
}
