'use client';

import { Toolbar, ToolbarTop } from '@/components/ui';
import { Box, Link } from '@/components/ui';
import { UsersSearch, UsersFilters, UsersBulkActions } from './';
import { BulkUserAction } from '../list/_domain';

type UsersToolbarProps = {
  allowedBulkActions: BulkUserAction[];
  hasSelection: boolean;
};

export function UsersToolbar({
  allowedBulkActions,
  hasSelection,
}: UsersToolbarProps) {
  return (
    <Toolbar>
      <ToolbarTop>
        <UsersSearch />
        <Box className="flex items-center gap-2 shrink-0">
          <Link
            href="/dashboard/users/create"
            variant="foreground"
            border="subtle"
          >
            Create User
          </Link>
        </Box>
      </ToolbarTop>
      <Box className="flex items-center justify-between gap-4 flex-wrap">
        <UsersBulkActions
          allowedBulkActions={allowedBulkActions}
          hasSelection={hasSelection}
        />
        <UsersFilters />
      </Box>
    </Toolbar>
  );
}
