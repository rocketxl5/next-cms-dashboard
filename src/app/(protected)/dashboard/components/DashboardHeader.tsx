'use client';

import { HeaderSlot } from '@/components/layout-primitives';
import { SignoutBtn, ToggleThemeBtn } from '@/components/ui/button';

export function DashboardHeader() {
  return (
    <HeaderSlot>
      <h2>Dashboard Header</h2>
      <div>
        <ToggleThemeBtn />
        <SignoutBtn />
      </div>
    </HeaderSlot>
  );
}
