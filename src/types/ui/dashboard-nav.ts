/**
 * dashboard-nav.ts
 * ----------------
 * Declarative configuration for dashboard sidebar navigation.
 *
 * Each nav item is associated with a capability rather than a role.
 * Visibility is determined by permission checks (`can(role, capability)`),
 * not by hard-coded role conditionals.
 *
 * Design principles:
 * - Navigation is a presentation concern, not a security boundary
 * - Capabilities express intent (what the link represents)
 * - Roles are resolved elsewhere via role → capability mapping
 *
 * IMPORTANT:
 * - All capability checks must be enforced server-side as well
 * - Hiding a link does NOT grant or restrict access on its own
 */

// import { Capability } from '@/lib/permissions/role-capabilities';
import { Capability } from "@/lib/permissions";

/**
 * Shape of a single dashboard navigation entry.
 *
 * Notes:
 * - `capability` represents the minimum permission required to see the link
 * - This keeps the nav independent of specific roles (ADMIN, EDITOR, etc.)
 * - Type safety ensures invalid or removed capabilities fail at compile time
 */
export type DashboardNavItem = {
  label: string;
  href: string;
  capability: Capability;
};

/**
 * Dashboard sidebar navigation configuration.
 *
 * Rendering logic should filter this list using:
 *   can(user.role, item.capability)
 *
 * This file intentionally contains no logic and no role knowledge.
 */
export const dashboardNav: DashboardNavItem[] = [
  {
    label: 'Users',
    href: '/dashboard/users',
    capability: 'EDIT_USER',
  },
  {
    label: 'Content',
    href: '/dashboard/content',
    capability: 'EDIT_CONTENT',
  },
];
