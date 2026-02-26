import { DashboardRole } from '@/types/shared';
import { AppRole } from '@/types/enums';
import { Capability } from '../model/capabilities';
import { hasPermission } from '../has-permission';

/**
 * Creates a dashboard action helper that requires authority checks.
 *
 * Example:
 *   const canEditUser = createAuthorityAction('USER_EDIT');
 */
export function createAuthorityAction<TContext extends object>(
  capability: Capability,
) {
  return function action(
    actorRole: DashboardRole,
    context: AppRole | TContext,
  ): boolean {
    if (typeof context === 'string') {
      return hasPermission(actorRole, capability, { targetRole: context });
    }
    return hasPermission(actorRole, capability, context);
  };
}
