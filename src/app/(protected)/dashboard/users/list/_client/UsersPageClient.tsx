'use client';

import { Box } from '@/components/ui';
import { UsersToolbar } from '../../_components';
import { UsersTable } from './UsersTable';

import { useUserSelection } from '@/providers';
import { getAllowedBulkActions, getSelectedUsers } from '@/lib/domain';

import { UserRow } from '../_domain';
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

  const selectedUsers = getSelectedUsers({ selectedUserIds, users });

  const hasSelection = selectedUserIds.size > 0;

  const allowedBulkActions = getAllowedBulkActions({
    selectedUsers,
    currentUser,
  });
  return (
    <Box className="flex flex-col gap-8">
      <UsersToolbar
        allowedBulkActions={allowedBulkActions}
        hasSelection={hasSelection}
      />

      <UsersTable
        users={users}
        currentUser={currentUser}
        pagination={pagination}
      />
    </Box>
  );
}
