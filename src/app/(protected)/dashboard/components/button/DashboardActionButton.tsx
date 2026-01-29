'use client';

import { Button } from '@/components/ui/button/Button';
import { ReactNode } from 'react';

interface DashboardActionButtonProps {
  can: boolean;
  onClick: () => void;
  children: ReactNode;
  variant?: 'default' | 'destructive';
}

export function DashboardActionButton({
  can,
  onClick,
  children,
  variant,
}: DashboardActionButtonProps) {
  if (!can) return null;

  return (
    <Button onClick={onClick} data-variant={variant}>
      {children}
    </Button>
  );
}
