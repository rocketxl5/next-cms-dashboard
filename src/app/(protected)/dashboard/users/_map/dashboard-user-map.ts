import { CurrentDashboardUser } from '@/types/shared';
import { DashboardRole } from '@/types/server';

export function toDashboardUser(role: string): CurrentDashboardUser | null {
  if (role === 'ADMIN' || role === 'SUPER_ADMIN') {
    return { role: role as DashboardRole };
  }

  return null;
}
