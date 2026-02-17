import { requireRole } from './require-role';
import { SessionUser } from '@/types/shared';
import { APP_ROLES } from '@/types/enums';

/**
 * Enforces that the current request is made by any authenticated user.
 *
 * Uses `requireRole` internally, passing all possible roles from the database enum.
 * This is a convenience wrapper for routes or actions that only need authentication,
 * without restricting to a specific role.
 *
 * @returns The result of `requireRole`, including `{ ok: boolean, user?, status? }`
 */
export async function requireAuth(): Promise<SessionUser> {
  return requireRole({
    roles: APP_ROLES, // allow any authenticated role
  });
}
