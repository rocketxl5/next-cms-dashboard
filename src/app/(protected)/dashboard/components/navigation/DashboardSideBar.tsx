'use client';

import { Box } from '@/components/ui';
import { DashboardNavItem } from './DashboardNav';

import { LinkVariants } from '@/lib/ui/variants';
import { allowedDashboardNav } from '../_lib/allowedDashboardNav';

import { DashboardRole } from '@/types/shared';

interface DashboardSideBarProps extends LinkVariants {
  role: DashboardRole;
}

export function DashboardSideBar({ role }: DashboardSideBarProps) {
  return (
    <nav aria-label="Dashboard navigation">
      <Box width="full" direction="col" gap="xs" padding="md" align="start">
        {/* Section navigation */}
        {allowedDashboardNav(role).map((item) => {
          return <DashboardNavItem key={item.href} item={item} />;
        })}
      </Box>
    </nav>
  );
}