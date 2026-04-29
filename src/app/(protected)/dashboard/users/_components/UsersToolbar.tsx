'use client';

import { Toolbar } from '@/components/ui';
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
      <Box gap="lg">
        <UsersSearch />
        <Link
          height="sm"
          textSize="sm"
          href="/dashboard/users/create"
          variant="foreground"
        >
          Create User
        </Link>
      </Box>
      <Box gap="lg" className="flex-wrap">
        {/* <Box className="flex items-center justify-between gap-4 flex-wrap"> */}
        <UsersBulkActions
          allowedBulkActions={allowedBulkActions}
          hasSelection={hasSelection}
        />
        <UsersFilters />
      </Box>
    </Toolbar>
  );
}
