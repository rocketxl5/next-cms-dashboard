import { redirect } from 'next/navigation';
import { getSession } from './getSession';
import { SessionUser } from '@/types/shared';
import { RequireRoleOptions } from '@/types/shared/require-role-options';

export async function requireRole({
  roles,
  unauthenticatedRedirect = '/auth/signin',
  forbiddenRedirect = '/',
}: RequireRoleOptions): Promise<SessionUser> {
  // Get the current user session
  const session = await getSession();

  // Redirect unauthenticated users
  if (!session) {
    redirect(unauthenticatedRedirect);
  }

  // Normalize roles input to an array for uniform checking
  const allowed = Array.isArray(roles) ? roles : [roles];

  // Redirect users who are authenticated but not allowed
  if (!allowed.includes(session.user.role)) {
    redirect(forbiddenRedirect);
  }

  // Access granted: return the user object
  return session.user;
}
