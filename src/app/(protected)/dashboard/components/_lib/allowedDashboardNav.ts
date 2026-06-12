import { can } from '@/lib/permissions/evaluation';
import { dashboardNav } from '@/lib/ui/navigation/dashboard-nav';

import { DashboardRole } from '@/types/shared';

export function allowedDashboardNav(role: DashboardRole) {
  return dashboardNav.filter((item) => can(role, item.capability));
}
