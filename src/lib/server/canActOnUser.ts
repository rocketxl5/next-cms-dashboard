/**
 * canActOnUser
 * ============
 *
 * Purpose
 * -------
 * Determines whether one user (actor) has enough authority
 * to perform actions on another user (target) based purely
 * on role hierarchy.
 *
 * This helper answers:
 *   "Is the actor allowed to act on this target at all?"
 *
 * It does NOT decide:
 *   - what specific action is allowed (delete, suspend, etc.)
 *   - self-action rules (use isSelf separately)
 *   - business-specific constraints
 *
 * Core Rule
 * ---------
 * An actor can only act on a target if their role is
 * strictly higher than the target’s role.
 *
 * Examples
 * --------
 * ADMIN → USER         ✔ allowed
 * ADMIN → ADMIN        ✘ blocked (peer)
 * ADMIN → SUPER_ADMIN  ✘ blocked (upward)
 * SUPER_ADMIN → ADMIN  ✔ allowed
 * SUPER_ADMIN → SELF   (handled elsewhere)
 *
 * Why this exists
 * ---------------
 * Prevents:
 *   - peer tampering
 *   - privilege escalation
 *   - acting on higher-authority users
 *
 * Keeps hierarchy enforcement consistent
 * across the application.
 *
 * Typical usage
 * -------------
 * Combine with action checks:
 *
 *   if (!canActOnUser(actorRole, targetRole)) return false;
 *   if (actorRole !== 'SUPER_ADMIN') return false;
 *
 * Important
 * ---------
 * This helper should remain:
 *   - hierarchy-focused
 *   - simple
 *   - reusable
 *
 * Do not mix action-specific rules here.
 */

import { AppRole } from '@/types/enums';
import { isHigherRole } from '../permissions';
import { isDashboardRole } from '@/types/server';

export function canActOnUser(actorRole: AppRole, targetRole: AppRole) {
  if (!isDashboardRole(actorRole)) return false;

  return isHigherRole(actorRole, targetRole);
}