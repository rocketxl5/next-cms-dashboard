/**
 * TRUST ZONE: Server / Policy
 *
 * Represents:
 * - Roles that are allowed to access the dashboard
 *
 * Important:
 * - Independent of Prisma
 * - Depends only on app-level role knowledge
 * 
 * LEVEL 2 of type ladder hierarchy
 */

import { AppRole } from '../enums/role';

export const DASHBOARD_ROLE = ['EDITOR', 'ADMIN', 'SUPER_ADMIN'] as const;

export type DashboardRole = (typeof DASHBOARD_ROLE)[number];

/**
 * Type guard proving that a role
 * is allowed in dashboard context.
 */
export function isDashboardRole(role: AppRole): role is DashboardRole {
  return DASHBOARD_ROLE.some((r) => r === role);
}
