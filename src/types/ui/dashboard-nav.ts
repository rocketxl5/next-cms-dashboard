import { Capability } from '../../lib/permissions/model/capabilities';

export type DashboardNavItem = {
  label: string;
  href: string;
  capability: Capability;
};

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
