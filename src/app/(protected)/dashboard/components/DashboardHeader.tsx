'use client';

import { HeaderSlot } from '@/components/layout-primitives';

import { Box, SignoutBtn, ToggleThemeBtn } from '@/components/ui';

export function DashboardHeader() {
  return (
    <HeaderSlot>
      <h2>Dashboard Header</h2>
      <Box>
        <ToggleThemeBtn />
        <SignoutBtn />
      </Box>
    </HeaderSlot>
  );
}
