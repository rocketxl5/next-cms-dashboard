import { CurrentDashboardUser } from '@/types/shared';
import {
  BulkUserActionKey,
  UserRow,
} from '@/app/(protected)/dashboard/users/list/_domain';
import {
  canUpdateUserStatus,
  canDeleteUser,
} from '@/lib/permissions/resources/users/actions';

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
    return canDeleteUser(currentUser.role, { targetRole: user.role });
  },
};
