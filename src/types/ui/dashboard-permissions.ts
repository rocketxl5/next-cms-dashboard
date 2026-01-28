/**
 * TRUST ZONE: UI Context
 * 
 * ⚠️ This file does NOT enforce security.
 * It only controls visibility and UI behavior.
 *
 * UI-only permissions derived from
 * already-authorized dashboard roles.
 *
 * 
 * Persmission pattern: Permission-by-intent 
 * 
 * LEVEL 4 in type ladder hierarchy
 */

import { DashboardRole } from '../server/dashboard-role';

export type UiDashboardRole = DashboardRole;

/**
 * UI helpers are allowed here
 */
export function canEditUserProfile(role: UiDashboardRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}


export function canEditUserRole(role: DashboardRole) {
  return role === 'SUPER_ADMIN';
}

export function canSuspendUser(role: DashboardRole) {
  return role === 'ADMIN';
}

export function canDeleteUser(role: DashboardRole) {
  return role === 'ADMIN';
}
