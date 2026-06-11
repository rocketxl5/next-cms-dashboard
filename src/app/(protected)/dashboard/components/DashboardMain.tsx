'use client';

import { responsive } from '@/lib/ui/tokens';

type DashboardMainProps = {
  children: React.ReactNode;
};

export function DashboardMain({ children }: DashboardMainProps) {
  return <div className={responsive.page.container}>{children}</div>;
}
