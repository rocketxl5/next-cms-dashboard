'use client';

import { UsersTable } from './UsersTable';
import { DashboardTopBar } from '../../../components/DashboardTopBar';
import { useUserSelection } from '@/providers';
import { CurrentDashboardUser } from '@/types/shared';
import { UserRow } from '../../_domain';
import { getAllowedBulkActions, getSelectedUsers } from '@/lib/domain';

type UsersDashboardClientProps = {
  users: UserRow[];
  currentUser: CurrentDashboardUser;
};

export function UserDashboardClient({
  users,
  currentUser,
}: UsersDashboardClientProps) {
  const { selectedUserIds } = useUserSelection();
  const selectedCount = selectedUserIds.size;
  const selectedUsers = getSelectedUsers({ selectedUserIds, users });
  const allowedBulkActions = getAllowedBulkActions({
    selectedUsers,
    currentUser,
  });
  return (
    <>
      <DashboardTopBar
        allowedBulkActions={allowedBulkActions}
        selectedCount={selectedCount}
      />
      <UsersTable users={users} currentUser={currentUser} />
    </>
  );
}
