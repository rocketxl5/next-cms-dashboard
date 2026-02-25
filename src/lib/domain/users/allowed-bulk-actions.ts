import { BULK_USER_ACTIONS, UserRow } from '@/app/(protected)/dashboard/users/_domain';
import {
  canEditUser,
  canDeleteUser,
  canSuspendUser,
  canEditUserRole,
} from '@/lib/permissions/resources/users';
import { CurrentDashboardUser } from '@/types/shared';

type SelectedUsersProps = {
  selectedUserIds: Set<string>;
  users: UserRow[];
};

type AllowedBulkActionsProps = {
  selectedUsers: UserRow[];
  currentUser: CurrentDashboardUser; // adjust type to DashboardRole
};

export function getSelectedUsers({
  selectedUserIds,
  users,
}: SelectedUsersProps) {
  return users.filter((u) => selectedUserIds.has(u.id));
}

export function getAllowedBulkActions({
  selectedUsers,
  currentUser,
}: AllowedBulkActionsProps) {
  return BULK_USER_ACTIONS.filter((action) => {
    return selectedUsers.every((user) => {
      switch (action.key) {
        case 'edit':
          return canEditUser(currentUser.role, user.role);

        case 'suspend':
          return canSuspendUser(currentUser.role, user.role);

        case 'delete':
          return canDeleteUser(currentUser.role, user.role);

        case 'edit_role':
          return canEditUserRole(currentUser.role, user.role);

        default:
          return false;
      }
    });
  });
}
