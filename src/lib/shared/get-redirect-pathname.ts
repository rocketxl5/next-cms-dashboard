/**
 * Resolve post-auth redirect path
 * --------------------------------
 * - Honors explicit `from` param when provided
 * - Falls back to role-based default routes
 * - Pure helper (no redirects, no side effects)
 */

import { AppRole } from '@/types/enums';

export function getRedirectPathname(
  role: AppRole,
  from?: string | null,
): string {
  if (from) return from;

  switch (role) {
    case 'SUPER_ADMIN':
    case 'ADMIN':
    case 'EDITOR':
      return '/dashboard';
    case 'USER':
      return '/account';
    default:
      return '/';
  }
}
