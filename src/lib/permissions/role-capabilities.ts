/**
 * role-capabilities.ts
 * --------------------
 * Centralized role → capability mapping for the dashboard domain.
 *
 * This file is the single source of truth for:
 * - What actions a dashboard role is allowed to perform
 * - Capability typing derived directly from the data
 *
 * Notes:
 * - This file is intentionally framework-agnostic (no Next.js, no auth, no IO)
 * - UI visibility and server-side enforcement should both rely on `can()`
 * - Product-only roles (e.g. USER) are intentionally excluded
 */

import { DashboardRole } from '@/types/server';

/**
 * Canonical list of all dashboard capabilities.
 *
 * Defined once to:
 * - Avoid string duplication
 * - Keep SUPER_ADMIN / ADMIN in sync
 * - Preserve literal types via `as const`
 */
const CAPABILITIES = ['manage_users', 'manage_content'] as const;

/**
 * Mapping of dashboard roles to the capabilities they grant.
 *
 * IMPORTANT:
 * - Do NOT infer permissions from role hierarchy
 * - Capabilities are explicit by design
 * - SUPER_ADMIN is treated as a superset role
 */
export const ROLE_CAPABILITIES = {
  SUPER_ADMIN: CAPABILITIES,
  ADMIN: ['manage_users', 'manage_content'],
  EDITOR: ['manage_content'],
} as const;

/**
 * Union of all known capabilities.
 *
 * Derived from ROLE_CAPABILITIES to ensure:
 * - No drift between data and types
 * - Compiler errors when capabilities are added/removed
 */
export type Capability =
  (typeof ROLE_CAPABILITIES)[keyof typeof ROLE_CAPABILITIES][number];

/**
 * Checks whether a given dashboard role grants a specific capability.
 *
 * Notes on implementation:
 * - The type assertion is required due to a TypeScript limitation when calling
 *   `.includes()` on a union of readonly tuples with different widths.
 * - This is safe because `Capability` itself is derived from ROLE_CAPABILITIES.
 */
export function can(role: DashboardRole, capability: Capability): boolean {
  return (ROLE_CAPABILITIES[role] as readonly Capability[]).includes(
    capability,
  );
}
