'use client';

import { Box } from '@/components/ui';

type DashboardMainProps = {
  children: React.ReactNode;
};

export function DashboardMain({ children }: DashboardMainProps) {
  return <Box>{children}</Box>;
}
