'use client';

import { Box } from '@/components/ui';
import { UsersToolbar } from '../../_components';
import { UsersTable } from './UsersTable';

import { useUserSelection } from '@/providers';
import { getAllowedBulkActions, getSelectedUsers } from '@/lib/domain/users';

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
  const { hasSelection, selectedUserIds } = useUserSelection();

  const selectedUsers = getSelectedUsers({ selectedUserIds, users });

  const allowedBulkActions = getAllowedBulkActions({
    selectedUsers,
    currentUser,
  });

  return (
    <Box direction="col" gap="lg">
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
