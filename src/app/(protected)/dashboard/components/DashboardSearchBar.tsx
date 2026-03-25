'use client';

import { UsersSearch, UsersAction } from '../users/_components';
import { Link, Box } from '@/components/ui';

import { BulkUserAction } from '../users/list/_domain';

type DashboardSearchBarProps = {
  allowedBulkActions: BulkUserAction[];
  selectedCount: number;
};

export function DashboardSearchBar({
  allowedBulkActions,
  selectedCount,
}: DashboardSearchBarProps) {
  return (
    <Box className="flex justify-between">
      <UsersAction
        allowedBulkActions={allowedBulkActions}
        hasSelection={selectedCount > 0}
      />
      <UsersSearch />
      <Link href="/dashboard/users/create" variant="default" border="subtle">
        Create User
      </Link>
    </Box>
  );
}
