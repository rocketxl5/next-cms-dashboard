import {
  BulkUserActionKey,
} from '../bulk-user-action';
import { UserRow } from '../../../_domain';
import {
  canUpdateUserStatus,
  canDeleteUser,
} from '@/lib/permissions/resources/users/actions';

import { CurrentDashboardUser } from '@/types/shared';
type BulkActionPermissionResolver = (
  currentUser: CurrentDashboardUser,
  user: UserRow,
) => boolean;

export const MAP_BULK_USERS_ACTION_PERMISSION: Record<
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
