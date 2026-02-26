import {
  BULK_USER_ACTIONS,
  UserRow,
} from '@/app/(protected)/dashboard/users/_domain';
import { CurrentDashboardUser } from '@/types/shared';
import { BULK_ACTION_PERMISSION_MAP } from './map-bulk-actions';

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
    const resolver = BULK_ACTION_PERMISSION_MAP[action.key];

    if (!resolver) return false;

    return selectedUsers.every((user) => {
      const allowed = resolver(currentUser, user);

      console.log({
        action: action.key,
        userId: user.id,
        status: user.status,
        allowed,
      });
      return allowed;
    });
  });
}
