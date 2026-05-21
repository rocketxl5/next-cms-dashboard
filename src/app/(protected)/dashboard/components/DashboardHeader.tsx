'use client';

import { Box, SignoutBtn, ToggleThemeBtn, ZapLogo } from '@/components/ui';

export function DashboardHeader() {
  return (
    <Box justify="between" align="center" width="full" padding="md">
      <ZapLogo size={35} />
      <Box>
        <ToggleThemeBtn />
        <SignoutBtn />
      </Box>
    </Box>
  );
}
