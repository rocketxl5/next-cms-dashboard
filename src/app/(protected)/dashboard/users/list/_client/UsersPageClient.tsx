'use client';

import { UsersTable } from './UsersTable';
import { DashboardSearchBar } from '@/app/(protected)/dashboard/components';
import { UserRow } from '../_domain';

import { useUserSelection } from '@/providers';
import { getAllowedBulkActions, getSelectedUsers } from '@/lib/domain';

import { CurrentDashboardUser } from '@/types/shared';
import { PaginationMeta } from '@/types/shared/pagination';

type UsersPageClientProps = {
  users: UserRow[];
  currentUser: CurrentDashboardUser;
  pagination: PaginationMeta;
};

export function UsersPageClient({
  users,
  currentUser,
  pagination,
}: UsersPageClientProps) {
  const { selectedUserIds } = useUserSelection();
  const selectedCount = selectedUserIds.size;
  const selectedUsers = getSelectedUsers({ selectedUserIds, users });
  const allowedBulkActions = getAllowedBulkActions({
    selectedUsers,
    currentUser,
  });
  return (
    <>
      <DashboardSearchBar
        allowedBulkActions={allowedBulkActions}
        selectedCount={selectedCount}
      />
      <UsersTable
        users={users}
        currentUser={currentUser}
        pagination={pagination}
      />
    </>
  );
}
