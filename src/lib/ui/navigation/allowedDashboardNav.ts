import { dashboardNav } from '@/types/ui';
import { DashboardRole } from '@/types/server';
import { can } from '@/lib/permissions/evaluation';

export function allowedDashboardNav(role: DashboardRole) {
  return dashboardNav.filter((item) => can(role, item.capability));
}
