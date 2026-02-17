/**
 * Higher-order function for API route handlers.
 *
 * Wraps a handler function to enforce role-based access control.
 * Handles:
 * - Session lookup and role checking via `requireRoleApi`
 * - Returns proper HTTP status codes:
 *   - 401 Unauthorized for no session
 *   - 403 Forbidden for insufficient role
 *   - 500 Internal Server Error for unexpected exceptions
 *
 * @param roles - Allowed role(s) for this API route
 * @param handler - The actual API route handler to execute on success
 * @returns A wrapped handler ready for Next.js API route use
 */

import { NextRequest, NextResponse } from 'next/server';
import { getSession } from './get-session';
import { AppRole } from '@/types/enums';
import { SessionUser } from '@/types/shared';

/**
 * Checks authentication + role for API routes.
 * No redirects; returns structured results.
 */
export async function requireRoleApi(
  roles: AppRole | readonly AppRole[],
): Promise<
  | { ok: true; user: SessionUser }
  | { ok: false; reason: 'unauthenticated' | 'forbidden' }
> {
  // Resolve session
  const session = await getSession();

  if (!session) return { ok: false, reason: 'unauthenticated' };

  // Normalize roles input
  const allowed = Array.isArray(roles) ? roles : [roles];

  // Check if user's role is allowed
  if (!allowed.includes(session.user.role))
    return { ok: false, reason: 'forbidden' };

  // Authorized
  return { ok: true, user: session.user };
}

export function withRole(
  roles: AppRole | readonly AppRole[],
  handler: (req: NextRequest, user: SessionUser) => Promise<Response>,
) {
  return async (
    req: NextRequest,
    context: { params: Promise<Record<string, string>> },
  ): Promise<Response> => {
    try {
      // Perform role enforcement
      const auth = await requireRoleApi(roles);

      if (!auth.ok) {
        const status = auth.reason === 'unauthenticated' ? 401 : 403;
        return NextResponse.json({ error: auth.reason }, { status });
      }

      // Call the original handler with the authenticated user
      return handler(req, auth.user);
    } catch (error) {
      console.error('withRole error', error);
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 },
      );
    }
  };
}
