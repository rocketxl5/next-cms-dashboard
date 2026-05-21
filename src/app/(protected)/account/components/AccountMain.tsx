'use client';

import { Box } from '@/components/ui';

type AccountMainProps = {
  children: React.ReactNode;
};

export function AccountMain({ children }: AccountMainProps) {
  return <Box>{children}</Box>;
}