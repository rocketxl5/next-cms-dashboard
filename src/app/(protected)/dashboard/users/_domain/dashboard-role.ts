import { UserRole } from './user-role';

export type DashboardRole = Extract<UserRole, 'ADMIN' | 'SUPER_ADMIN'>;

export const DASHBOARD_ROLES: readonly DashboardRole[] = [
  'ADMIN',
  'SUPER_ADMIN',
];
