'use client';

import { Button } from '@/components/ui/button/Button';
import { ButtonVariants } from '@/lib/ui/variants';

interface DashboardActionButtonProps extends ButtonVariants {
  can: boolean;
  onClick: () => void;
  children: React.ReactNode;
  selected: boolean;
}

export function DashboardActionButton({
  can,
  onClick,
  children,
  selected,
  size,
  variant,
}: DashboardActionButtonProps) {
  if (!can) return null;

  return (
    <Button onClick={onClick} variant={variant} size={size} disabled={selected}>
      {children}
    </Button>
  );
}
