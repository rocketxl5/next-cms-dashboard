/**
 * ---------------------------------------------------------------------------
 * can(role, capability)
 * ---------------------------------------------------------------------------
 *
 * Core capability evaluation helper.
 *
 * Determines whether a given system role is granted a specific capability.
 *
 * Architecture context:
 * - `Capability` represents the global union of all possible system actions.
 * - `SYSTEM_ROLE_CAPABILITIES` maps each role to a curated subset of those actions.
 * - This helper performs a simple membership check against that mapping.
 *
 * Why the type assertion?
 * ------------------------
 * `SYSTEM_ROLE_CAPABILITIES` preserves literal array types per role
 * (e.g. "CONTENT_CREATE" | "CONTENT_EDIT" | ...).
 *
 * However, this function accepts the broader `Capability` union.
 * TypeScript therefore narrows `.includes()` too aggressively.
 *
 * We widen the role capabilities to `readonly Capability[]` at the
 * evaluation boundary to allow checking any valid capability safely.
 *
 * This cast is safe because:
 * - All role capability arrays are defined using
 *   `satisfies readonly Capability[]`
 * - Therefore every element is guaranteed to be a valid `Capability`
 *
 * This function intentionally performs:
 * - No policy logic
 * - No hierarchy checks
 * - No contextual evaluation
 *
 * It is a pure role → capability membership check.
 * Higher-level permission logic should live in `hasPermission`.
 * ---------------------------------------------------------------------------
 */

import { DashboardRole } from '@/types/shared';
import { SYSTEM_ROLE_CAPABILITIES } from '@/lib/permissions/model/capabilities/system-role.capabilities';
import { Capability } from '@/lib/permissions/model/capabilities';

export function can(role: DashboardRole, capability: Capability): boolean {
  // Widen literal role capability arrays to generic Capability[]
  // to allow safe union-based membership checking.
  const roleCapabilities = SYSTEM_ROLE_CAPABILITIES[
    role
  ] as readonly Capability[];

  return roleCapabilities.includes(capability);
}
