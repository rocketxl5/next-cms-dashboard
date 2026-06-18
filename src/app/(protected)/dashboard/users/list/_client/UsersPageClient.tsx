'use client';

import { Box } from '@/components/ui';
import { UsersToolbar } from '../_toolbar';
import { BulkActionDropdown } from '../_bulkactionbar/BulkActionDropdown';
import { UsersTable } from './UsersTable';

import { useUserSelection } from '@/providers';
import {
  getAllowedBulkActions,
  getSelectedUsers,
} from '@/app/(protected)/dashboard/users/list/_bulkactionbar/_domain';

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
    <Box direction="col" gap="lg" width="full">
      <UsersToolbar hasSelection={hasSelection} />

      {hasSelection && (
        <BulkActionDropdown
          allowedBulkActions={allowedBulkActions}
          hasSelection={hasSelection}
          selectedCount={selectedUserIds.size}
        />
      )}

      <UsersTable
        users={users}
        currentUser={currentUser}
        pagination={pagination}
      />
    </Box>
  );
}
