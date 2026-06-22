'use client';

import { Surface } from '@/components/ui';

import {
  ClearSearch,
  CreateUser,
  UsersSearch,
  UsersDateFilter,
  UsersRoleFilter,
  UsersStatusFilter,
} from '../_toolbar/_components';

import { useUsersFilters } from './_hooks/useUsersFilters';

import { responsiveAdapters } from '@/lib/ui/tokens';

type UsersToolbarProps = {
  hasSelection: boolean;
};

export function UsersToolbar({ hasSelection }: UsersToolbarProps) {
  const { isActive, clear } = useUsersFilters();

  return (
    <Surface className={responsiveAdapters.toolbar.root}>
      <UsersSearch disabled={hasSelection} />

      <Surface className={responsiveAdapters.toolbar.controls}>
        <UsersRoleFilter disabled={hasSelection} />

        <UsersStatusFilter disabled={hasSelection} />

        <UsersDateFilter disabled={hasSelection} />

        <ClearSearch isActive={isActive} onClick={clear} />

        <CreateUser />
      </Surface>
    </Surface>
  );
}
