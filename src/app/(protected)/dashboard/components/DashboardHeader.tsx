'use client';

import { useMobileMenu } from '@/components/ui/navigation/mobile/_hooks';

import { Hamburger, MobileMenu } from '@/components/ui/navigation';
import { Box, SignoutBtn, ToggleThemeBtn, ZapLogo } from '@/components/ui';

import { responsiveAdapters } from '@/lib/ui/tokens';

import { NavItem } from '@/types/ui';

interface DashboardHeaderProps {
  navItems: NavItem[];
}

export function DashboardHeader({ navItems }: DashboardHeaderProps) {
  const mobileMenu = useMobileMenu();

  return (
    <Box justify="between" align="center" width="full" padding="md">
      <Box align="center" gap="md">
        <nav
          className={responsiveAdapters.visibility.belowDesktop}
          aria-label="Mobile navigation"
        >
          <Hamburger open={mobileMenu.open} onClick={mobileMenu.toggleMenu} />
          <MobileMenu
            open={mobileMenu.open}
            closeMenu={mobileMenu.closeMenu}
            navItems={navItems}
          />
        </nav>
        <ZapLogo size={35} />
      </Box>
      <Box>
        <ToggleThemeBtn />
        <SignoutBtn />
      </Box>
    </Box>
  );
}
