import { Role } from '@prisma/client';

export type DashboardRole = Extract<Role, 'ADMIN' | 'SUPER_ADMIN'>;

export const DASHBOARD_ROLES: readonly DashboardRole[] = [
  'ADMIN',
  'SUPER_ADMIN',
];

export function isDashboardRole(role: Role): role is DashboardRole {
  return DASHBOARD_ROLES.includes(role as DashboardRole);
}
