'use client';

import { Hamburger } from '@/components/ui/navigation';
import { Box, SignoutBtn, ToggleThemeBtn, ZapLogo } from '@/components/ui';

import { useMobileMenu } from '@/components/ui/navigation/mobile/hooks';
import { responsive } from '@/lib/ui/tokens';

export function DashboardHeader() {
  const mobileMenu = useMobileMenu();
  return (
    <Box justify="between" align="center" width="full" padding="md">
      <Box>
        <ZapLogo size={35} />
        <div className={responsive.visibility.belowDesktop}>
          <Hamburger open={mobileMenu.open} onClick={mobileMenu.toggle} />
        </div>
      </Box>
      <Box>
        <ToggleThemeBtn />
        <SignoutBtn />
      </Box>
    </Box>
  );
}
