'use client';

import { MainSlot } from '@/components/layout-primitives';

interface DashboardMainProps {
  children: React.ReactNode;
}

export function DashboardMain({ children }: DashboardMainProps) {
  return (
    <MainSlot>
      <div className="h-full overflow-y-auto">{children}</div>
    </MainSlot>
  );
}
