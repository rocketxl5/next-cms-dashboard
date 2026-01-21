// app/dashboard/users/_domain/dashboard-user-row.ts

/**
 * DashboardUserRow
 * ----------------
 * A dashboard-specific projection of UserRow.
 *
 * This type represents users as they are *guaranteed* to appear
 * inside the admin dashboard context.
 *
 * Key differences from UserRow:
 * - `role` is narrowed to DashboardRole (ADMIN | SUPER_ADMIN)
 *
 * Why this exists:
 * - UserRow models the full domain (USER, AUTHOR, EDITOR, etc.)
 * - The dashboard only allows ADMIN and SUPER_ADMIN
 * - UI components (tables, badges, actions) should not defensively
 *   handle impossible states
 *
 * Where this type SHOULD be used:
 * - Dashboard tables
 * - Dashboard-only UI components
 * - Admin actions and server-side adapters
 *
 * Where this type SHOULD NOT be used:
 * - Public pages
 * - Account pages
 * - Generic user domain logic
 *
 * Narrowing MUST happen at the boundary:
 * - Server query
 * - Data adapter
 * - Loader / action
 *
 * UI components consuming this type may safely assume:
 * - role === 'ADMIN' | 'SUPER_ADMIN'
 */

import { UserRow } from './user-row';
import { DashboardRole } from './dashboard-role';

export type DashboardUserRow = Omit<UserRow, 'role'> & {
  role: DashboardRole;
};
