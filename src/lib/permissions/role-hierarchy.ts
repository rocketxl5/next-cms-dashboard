/**
 * ROLE HIERARCHY & COMPARISON HELPERS
 * ===================================
 *
 * Purpose
 * -------
 * Centralizes role ranking and comparison logic used by
 * permission checks across the app.
 *
 * This file answers:
 *   "Is role A higher than role B?"
 *
 * It does NOT decide:
 *   - whether an action is allowed
 *   - business rules (delete, suspend, etc.)
 *   - authentication/session logic
 *
 * Why this exists
 * ---------------
 * Comparing roles with conditionals like:
 *   role === 'SUPER_ADMIN'
 *   role !== 'USER'
 * scattered across the codebase becomes brittle.
 *
 * A numeric hierarchy gives us:
 *   ✔ consistent comparisons
 *   ✔ single source of truth
 *   ✔ easy refactoring
 *   ✔ safer permission logic
 *
 * Mental model
 * ------------
 * Higher number = more authority
 *
 *   USER        = 1
 *   ADMIN       = 2
 *   SUPER_ADMIN = 3
 *
 * Typical usage
 * -------------
 * - Prevent acting on equal/higher roles
 * - Guard admin actions
 * - Enforce authority boundaries
 *
 * Example:
 *   if (!isHigherRole(actorRole, targetRole)) return false;
 *
 * Important
 * ---------
 * This file should remain:
 *   - small
 *   - predictable
 *   - side-effect free
 *
 * If logic becomes action-specific,
 * it belongs in `dashboard-permissions.ts`,
 * not here.
 */

import { AppRole } from '@/types/enums';

export const ROLE_RANK: Record<AppRole, number> = {
  USER: 1,
  ADMIN: 2,
  SUPER_ADMIN: 3,
};

export function isHigherRole(a: AppRole, b: AppRole) {
  return ROLE_RANK[a] > ROLE_RANK[b];
}

export function isSameOrHigherRole(a: AppRole, b: AppRole) {
  return ROLE_RANK[a] >= ROLE_RANK[b];
}

export function isLowerRole(a: AppRole, b: AppRole) {
  return ROLE_RANK[a] < ROLE_RANK[b];
}