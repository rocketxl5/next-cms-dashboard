'use client';

import { responsiveAdapters } from '@/lib/ui/tokens';

type DashboardMainProps = {
  children: React.ReactNode;
};

export function DashboardMain({ children }: DashboardMainProps) {
  return <div className={responsiveAdapters.page.container}>{children}</div>;
}
