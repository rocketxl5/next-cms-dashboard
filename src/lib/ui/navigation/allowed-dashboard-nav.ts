import { Users, FileText, LayoutDashboard } from 'lucide-react';

import { can } from '@/lib/permissions/evaluation';

import { NavItem } from '@/types/ui';
import { DashboardRole } from '@/types/shared';

export const dashboardNav: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    capability: 'USER_EDIT',
    icon: LayoutDashboard,
  },
  {
    label: 'Users',
    href: '/dashboard/users',
    capability: 'USER_EDIT',
    icon: Users,
  },
  {
    label: 'Content',
    href: '/dashboard/content',
    capability: 'CONTENT_EDIT',
    icon: FileText,
  },
];

export function allowedDashboardNav(role: DashboardRole) {
  return dashboardNav.filter((item) => can(role, item.capability));
}
