import { DashboardNavItem } from '@/types/ui';
import { DashboardRole } from '@/types/shared';
import { can } from '@/lib/permissions/evaluation';

export const dashboardNav: DashboardNavItem[] = [
  {
    label: 'Users',
    href: '/dashboard/users',
    capability: 'USER_EDIT',
  },
  {
    label: 'Content',
    href: '/dashboard/content',
    capability: 'CONTENT_EDIT',
  },
];

export function allowedDashboardNav(role: DashboardRole) {
  return dashboardNav.filter((item) => can(role, item.capability));
}
