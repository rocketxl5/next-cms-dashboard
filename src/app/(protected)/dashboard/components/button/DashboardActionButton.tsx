'use client';

import { Button } from '@/components/ui/button/Button';
import { ButtonVariants } from '@/lib/ui/variants';

interface DashboardActionButtonProps extends ButtonVariants {
  can: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export function DashboardActionButton({
  can,
  onClick,
  children,
  size,
  variant,
}: DashboardActionButtonProps) {
  if (!can) return null;

  return (
    <Button onClick={onClick} variant={variant} size={size}>
      {children}
    </Button>
  );
}
