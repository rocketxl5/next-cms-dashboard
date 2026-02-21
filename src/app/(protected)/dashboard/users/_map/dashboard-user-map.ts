import { CurrentDashboardUser, DashboardRole } from '@/types/shared';

export function toDashboardUser(role: string): CurrentDashboardUser | null {
  if (role === 'ADMIN' || role === 'SUPER_ADMIN') {
    return { role: role as DashboardRole };
  }

  return null;
}
