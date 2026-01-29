/**
 * INDUSTRY-STANDARD DASHBOARD PERMISSIONS
 * --------------------------------------
 * USER        → self-service only
 * ADMIN       → operational control
 * SUPER_ADMIN → authority & irreversible actions
 */

import { AppRole } from "../../types/enums";

/* ---------------------------------------------------
 * PROFILE & ACCOUNT
 * --------------------------------------------------- */

export function canViewOwnProfile(role: AppRole) {
  return role === 'USER' || role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canEditOwnProfile(role: AppRole) {
  return role === 'USER' || role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canEditOtherUserProfile(role: AppRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canResetUserPassword(role: AppRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

/* ---------------------------------------------------
 * USER MANAGEMENT
 * --------------------------------------------------- */

export function canViewUsers(role: AppRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canInviteUser(role: AppRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canEditUserRole(role: AppRole) {
  return role === 'SUPER_ADMIN';
}

export function canSuspendUser(role: AppRole) {
  return role === 'SUPER_ADMIN';
}

export function canDeleteUser(role: AppRole) {
  return role === 'SUPER_ADMIN';
}

/* ---------------------------------------------------
 * CONTENT MANAGEMENT
 * --------------------------------------------------- */

export function canCreateContent(role: AppRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canEditContent(role: AppRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canPublishContent(role: AppRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canDeleteContent(role: AppRole) {
  return role === 'SUPER_ADMIN';
}

/* ---------------------------------------------------
 * SYSTEM & SECURITY
 * --------------------------------------------------- */

export function canViewAuditLogs(role: AppRole) {
  return role === 'SUPER_ADMIN';
}

export function canChangeSecuritySettings(role: AppRole) {
  return role === 'SUPER_ADMIN';
}

export function canManageApiKeys(role: AppRole) {
  return role === 'SUPER_ADMIN';
}

/* ---------------------------------------------------
 * BILLING & ORGANIZATION
 * --------------------------------------------------- */

export function canViewBilling(role: AppRole) {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function canEditBilling(role: AppRole) {
  return role === 'SUPER_ADMIN';
}

export function canDeleteOrganization(role: AppRole) {
  return role === 'SUPER_ADMIN';
}
