'use client';

import { Box, Link } from '@/components/ui';
import { UserRoundPlus } from 'lucide-react';
import {
  ClearSearch,
  CreateUser,
  UsersSearch,
  UsersDateFilter,
  UsersRoleFilter,
  UsersStatusFilter,
} from '../_toolbar/_components';

import { useUsersFilters } from './_hooks/useUsersFilters';

type UsersToolbarProps = {
  hasSelection: boolean;
};

export function UsersToolbar({ hasSelection }: UsersToolbarProps) {
  const { isActive, clear } = useUsersFilters();

  return (
    <Box width="full" justify="between">
      <UsersSearch disabled={hasSelection} />

      <Box align="center" gap="md">
        <UsersRoleFilter disabled={hasSelection} />

        <UsersStatusFilter disabled={hasSelection} />

        <UsersDateFilter disabled={hasSelection} />

        <ClearSearch isActive={isActive} onClick={clear} />

        <CreateUser />
      </Box>
    </Box>
  );
}
