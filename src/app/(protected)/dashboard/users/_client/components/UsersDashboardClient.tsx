'use client';

import { UsersTable } from './UsersTable';
import { BulkBar } from '../../../components/BulkBar';
import { useUserSelection } from '@/hooks/useUserSelection';
import { CurrentDashboardUser } from '@/types/shared';
import { BULK_USER_ACTIONS, BulkUserAction, UserRow } from '../../_domain';
import { getSelectedUsers } from '../helper/allowed-bulk-actions';
import {
  canEditUser,
  canDeleteUser,
  canSuspendUser,
  canEditUserRole,
} from '@/lib/permissions/dashboard/actions/users';

type UsersDashboardClientProps = {
  users: UserRow[];
  currentUser: CurrentDashboardUser;
};

export function UserDashboardClient({
  users,
  currentUser,
}: UsersDashboardClientProps) {
  const { clearSelection, selectedUserIds, toggleUserSelection } =
    useUserSelection();
  // select_button abled > 0 | disabled < 1
  const hasSelection = selectedUserIds.size > 0;
  const selectedUsers = getSelectedUsers({ selectedUserIds, users });

  const allowedBulkActions = BULK_USER_ACTIONS.filter((action) => {
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

  return (
    <>
      <BulkBar
        selectedUserIds={selectedUserIds}
        hasSelection={hasSelection}
        allowedBulkActions={allowedBulkActions}
      />
      <UsersTable
        users={users}
        currentUser={currentUser}
        selectedUserIds={selectedUserIds}
        toggleUserSelection={toggleUserSelection}
      />
    </>
  );
}
