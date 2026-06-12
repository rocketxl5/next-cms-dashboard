'use client';

import { useMobileMenu } from '@/components/ui/navigation/mobile/_hooks';

import { Hamburger, MobileMenu } from '@/components/ui/navigation';
import { Box, SignoutBtn, ToggleThemeBtn, ZapLogo } from '@/components/ui';

import { responsive } from '@/lib/ui/tokens';

import { NavItem } from '@/types/ui';

interface DashboardSideBarProps {
  navItems: NavItem[];
}

export function DashboardHeader({ navItems }: DashboardSideBarProps) {
  const mobileMenu = useMobileMenu();

  return (
    <Box justify="between" align="center" width="full" padding="md">
      <Box>
        <ZapLogo size={35} />
        <div className={responsive.visibility.belowDesktop}>
          <Hamburger open={mobileMenu.open} onClick={mobileMenu.toggle} />
          <MobileMenu
            open={mobileMenu.open}
            closeMenu={mobileMenu.closeMenu}
            navItems={navItems}
          />
        </div>
      </Box>
      <Box>
        <ToggleThemeBtn />
        <SignoutBtn />
      </Box>
    </Box>
  );
}
