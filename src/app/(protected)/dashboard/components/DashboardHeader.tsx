'use client';

import { HeaderSlot } from '@/components/layout-primitives';

import { Box, SignoutBtn, ToggleThemeBtn, ZapLogo } from '@/components/ui';

export function DashboardHeader() {
  return (
    <HeaderSlot>
      <Box justify="between" align="center" width="full" padding="md">
        <ZapLogo size={35} />
        <Box>
          <ToggleThemeBtn />
          <SignoutBtn />
        </Box>
      </Box>
    </HeaderSlot>
  );
}
