import { AppRole, UserStatus } from '@/types/enums';
import { DashboardRole } from '@/types/shared';
import { Capability } from './model/capabilities';
import { POLICIES } from './policies/policies';
import { canActOnUser } from './authority';
import { can } from './evaluation';

interface PolicyContext {
  targetRole?: AppRole;
  currentStatus?: UserStatus;
  nextStatus?: UserStatus;
}

export function hasPermission(
  actorRole: DashboardRole,
  capability: Capability,
  context: PolicyContext = {},
): boolean {
  const policy = POLICIES[capability];

  // capability not defined in policies
  if (!policy) return false;

  // -----------------------------
  // Capability requirement check
  // -----------------------------
  if (policy.capabilities) {
    const hasCapability = policy.capabilities?.every((cap) =>
      can(actorRole, cap),
    );

    if (!hasCapability) return false;
  }

  // -----------------------------
  // Authority requirement check
  // -----------------------------
  if (policy.authority === 'ACT_ON_USER') {
    if (!context.targetRole) return false;

    const hasAuthority = canActOnUser(actorRole, context.targetRole);

    if (!hasAuthority) return false;
  }

  // All checks passed
  return true;
}
