'use client';

import { Box } from '@/components/ui';
import { DashboardLink } from './link/DashboardLink';

import { LinkVariants } from '@/lib/ui/variants';
import { allowedDashboardNav } from '@/lib/ui/navigation';

import { DashboardRole } from '@/types/shared';

interface DashboardSideBarProps extends LinkVariants {
  role: DashboardRole;
}

export function DashboardSideBar({ role }: DashboardSideBarProps) {
  return (
    <Box width="full" direction="col" gap="xs" padding="md" align="start">
      {/* Section navigation */}
      {allowedDashboardNav(role).map((item) => {
        return <DashboardLink key={item.href} item={item} />;
      })}
    </Box>
  );
}