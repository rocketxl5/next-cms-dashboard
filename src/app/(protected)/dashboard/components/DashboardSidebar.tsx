'use client';

import { SideSlot } from '@/components/layout-primitives';
import { DashboardLink } from './link/DashboardLink';
import { DashboardRole } from '@/types/shared';
import { LinkVariants } from '@/lib/ui/variants';
import { allowedDashboardNav } from '@/lib/ui/navigation';

interface DashboardSidebarProps extends LinkVariants {
  role: DashboardRole;
}

export function DashboardSidebar({ role }: DashboardSidebarProps) {
  return (
    <SideSlot>
      <nav className="w-full flex flex-col gap-1 p-4">
        {/* Dashboard root */}
        <DashboardLink href="/dashboard">Dashboard</DashboardLink>

        {/* Section navigation */}
        {allowedDashboardNav(role).map((item) => {
          return (
            <DashboardLink key={item.href} href={item.href}>
              {item.label}
            </DashboardLink>
          );
        })}
      </nav>
    </SideSlot>
  );
}