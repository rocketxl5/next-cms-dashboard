import { CurrentDashboardUser, DashboardRole } from '@/types/shared';

export function toDashboardUser(
  id: string,
  role: string,
): CurrentDashboardUser | null {
  if (role === 'ADMIN' || role === 'SUPER_ADMIN') {
    return { id, role: role as DashboardRole };
  }

  return null;
}
