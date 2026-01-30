'use client';

import { ReactNode } from 'react';
import { Button } from '@/components/ui/button/Button';

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
    <Button onClick={onClick} variant={variant}>
      {children}
    </Button>
  );
}
