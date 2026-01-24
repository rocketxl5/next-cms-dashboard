/**
 * Trust zone: UI
 *
 * UI-only permissions derived from
 * already-authorized dashboard roles.
 *
 * ⚠️ This file does NOT enforce security.
 * It only controls visibility and UI behavior.
 * 
 * Persmission pattern: Permission-by-intent 
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
