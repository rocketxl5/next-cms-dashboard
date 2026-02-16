/**
 * INDUSTRY-STANDARD DASHBOARD PERMISSIONS
 * --------------------------------------
 * USER        → self-service only
 * ADMIN       → operational control
 * SUPER_ADMIN → authority & irreversible actions
 */

import { AppRole } from '@/types/enums';
import { DashboardRole } from '@/types/server';
import { can } from './role-capabilities';

/* ---------------------------------------------------
 * PROFILE & ACCOUNT
 * --------------------------------------------------- */

// export function canViewOwnProfile(role: AppRole) {
//   return can(role, 'VIEW_OWN' as Capability);
// }

export function canEditOwnProfile(role: AppRole) {
  return role === 'USER' || role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canEditOtherUserProfile(role: DashboardRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canResetUserPassword(role: DashboardRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

/* ---------------------------------------------------
 * USER MANAGEMENT
 * --------------------------------------------------- */

export function canViewUsers(role: DashboardRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canInviteUser(role: DashboardRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canEditUserRole(role: DashboardRole) {
  return role === 'SUPER_ADMIN';
}

export function canEditUser(role: DashboardRole) {
  return role === 'SUPER_ADMIN';
}

export function canSuspendUser(role: DashboardRole) {
  return role === 'SUPER_ADMIN';
}

export function canDeleteUser(role: DashboardRole) {
  return role === 'SUPER_ADMIN';
}

/* ---------------------------------------------------
 * CONTENT MANAGEMENT
 * --------------------------------------------------- */

export function canCreateContent(role: DashboardRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canEditContent(role: DashboardRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canPublishContent(role: DashboardRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canDeleteContent(role: DashboardRole) {
  return role === 'SUPER_ADMIN';
}

/* ---------------------------------------------------
 * SYSTEM & SECURITY
 * --------------------------------------------------- */

export function canViewAuditLogs(role: DashboardRole) {
  return role === 'SUPER_ADMIN';
}

export function canChangeSecuritySettings(role: DashboardRole) {
  return role === 'SUPER_ADMIN';
}

export function canManageApiKeys(role: DashboardRole) {
  return role === 'SUPER_ADMIN';
}

/* ---------------------------------------------------
 * BILLING & ORGANIZATION
 * --------------------------------------------------- */

export function canViewBilling(role: DashboardRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canEditBilling(role: DashboardRole) {
  return role === 'SUPER_ADMIN';
}

export function canDeleteOrganization(role: DashboardRole) {
  return role === 'SUPER_ADMIN';
}
