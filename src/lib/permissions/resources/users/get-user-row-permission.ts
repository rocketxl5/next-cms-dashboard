import { hasPermission } from '@/lib/permissions/has-permission';
import { canActOnUser } from '@/lib/permissions/authority';
import { isSelfAction } from '@/lib/permissions/evaluation';
import { canUpdateUserRole } from './actions';
import { CurrentDashboardUser } from '@/types/shared';
import { UserRow } from '@/app/(protected)/dashboard/users/_domain';

export function getUserRowPermissions(
  currentUser: CurrentDashboardUser,
  user: UserRow,
) {
  const self = isSelfAction(currentUser.id, user.id);

  const canAct = canActOnUser(
    currentUser.role,
    user.role,
    currentUser.id,
    user.id,
  );

  const canEdit = hasPermission(currentUser.role, 'USER_EDIT', {
    actorUserId: currentUser.id,
    targetUserId: user.id,
    targetRole: user.role,
  });

  const canUpdateRole = canUpdateUserRole(currentUser.role, user.role);

  return {
    self,
    canAct,
    canEdit,
    canUpdateRole,
    canSelect: canAct,
    readonly: self,
  };
}
