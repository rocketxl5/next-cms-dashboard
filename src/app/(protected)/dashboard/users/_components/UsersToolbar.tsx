'use client';

import { Toolbar, ToolbarTop } from '@/components/ui';
import { Box, Link } from '@/components/ui';
import { UsersSearch, UsersFilters, UsersBulkActions } from './';

import { BulkUserAction } from '../list/_domain';

type UsersToolbarProps = {
  allowedBulkActions: BulkUserAction[];
  selectedCount: number;
};

export function UsersToolbar({
  allowedBulkActions,
  selectedCount,
}: UsersToolbarProps) {
  return (
    <Toolbar>
      <ToolbarTop>
        <UsersSearch />
        <Box className="flex items-center gap-2 shrink-0">
          <UsersBulkActions
            allowedBulkActions={allowedBulkActions}
            selectedCount={selectedCount}
          />
          <Link
            href="/dashboard/users/create"
            variant="foreground"
            border="subtle"
          >
            Create User
          </Link>
        </Box>
      </ToolbarTop>
      <Box className="flex items-center gap-4 flex-wrap">
        <UsersFilters />
      </Box>
    </Toolbar>
  );
}
