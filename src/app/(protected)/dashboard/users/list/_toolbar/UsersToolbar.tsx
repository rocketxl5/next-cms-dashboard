'use client';

import { Box, Button, Link } from '@/components/ui';
import { SearchSlash, UserRoundPlus } from 'lucide-react';
import {
  UsersSearch,
  UsersDateFilter,
  UsersRoleFilter,
  UsersStatusFilter,
} from '.';

import { useUsersFilters } from './_hooks/useUsersFilters';

type UsersToolbarProps = {
  hasSelection: boolean;
};

export function UsersToolbar({ hasSelection }: UsersToolbarProps) {
  const { isActive, clear } = useUsersFilters();

  return (
    <Box width="full" justify="between" align="center">

      <Box justify="center" align="center" gap="md" className="flex-1">
        <UsersSearch />
      </Box>
      
      <Box align="center" gap="sm">
        <UsersRoleFilter />

        <UsersStatusFilter />

        <UsersDateFilter disabled={hasSelection} />

        <Button
          height="sm"
          textSize="sm"
          width="auto"
          variant="contrast"
          onClick={clear}
          disabled={!isActive}
          aria-label="Clear search and filters"
        >
          <SearchSlash size={20} />
        </Button>

        <Link
          className="h-10"
          width="square"
          padding="none"
          radius="full"
          variant="success"
          href="/dashboard/users/create"
          title="Create User"
          aria-label="Create User"
        >
          <UserRoundPlus size={22} />
        </Link>
      </Box>
    </Box>
  );
}
