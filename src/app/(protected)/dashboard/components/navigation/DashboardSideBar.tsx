'use client';

import { Box } from '@/components/ui';
import { DashboardNavItem } from './DashboardNavItem';

import { LinkVariants } from '@/lib/ui/variants';

import { NavItem } from '@/types/ui';

interface DashboardSideBarProps extends LinkVariants {
  navItems: NavItem[];
}

export function DashboardSideBar({ navItems }: DashboardSideBarProps) {
  return (
    <nav aria-label="Dashboard navigation">
      <Box width="full" direction="col" gap="xs" padding="md" align="start">
        {/* Section navigation */}
        {navItems.map((item) => {
          return <DashboardNavItem key={item.href} item={item} />;
        })}
      </Box>
    </nav>
  );
}