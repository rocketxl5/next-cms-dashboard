import { AppRole } from '@/types/enums';
import { isDashboardRole } from '@/types/shared';
import { isHigherRole, isHigherOrSameRole } from './role-hierarchy';
import { isSelfAction } from '../evaluation';

export function canActOnUser(
  actorRole: AppRole,
  targetRole: AppRole,
  actorUserId?: string,
  targetUserId?: string,
) {
  // -----------------------------
  //  Dashboard role restriction
  // -----------------------------
  if (!isDashboardRole(actorRole)) return false;

  // -----------------------------
  // Self action restriction
  // -----------------------------
  if (isSelfAction(actorUserId, targetUserId)) return false;

  // -----------------------------
  // Higher role check
  // -----------------------------
  if (actorRole !== 'SUPER_ADMIN') {
    return isHigherRole(actorRole, targetRole);
  }

  // -----------------------------
  // Default higher or same role (SUPER_ADMIN)
  // -----------------------------
  return isHigherOrSameRole(actorRole, targetRole);
}
