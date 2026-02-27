import { UserRow } from '@/app/(protected)/dashboard/users/_domain';
import { CurrentDashboardUser } from '@/types/shared';
import { BulkUserActionKey } from '@/app/(protected)/dashboard/users/_domain';
import {
  canUpdateUserStatus,
  canDeleteUser,
  canEditUserRole,
} from '@/lib/permissions/resources/users';

type BulkActionPermissionResolver = (
  currentUser: CurrentDashboardUser,
  user: UserRow,
) => boolean;

export const BULK_ACTION_PERMISSION_MAP: Record<
  BulkUserActionKey,
  BulkActionPermissionResolver
> = {
  activate: (currentUser, user) => {
    return canUpdateUserStatus(
      currentUser.role,
      user.role,
      user.status,
      'ACTIVE',
    );
  },

  suspend: (currentUser, user) => {
    return canUpdateUserStatus(
      currentUser.role,
      user.role,
      user.status,
      'SUSPENDED',
    );
  },

  delete: (currentUser, user) => {
    return canDeleteUser(currentUser.role, user.role);
  },

  edit_role: (currentUser, user) => {
    return canEditUserRole(currentUser.role, user.role);
  },
};
