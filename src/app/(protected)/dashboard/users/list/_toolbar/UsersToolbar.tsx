'use client';

import {
  ClearSearch,
  CreateUser,
  UsersSearch,
  UsersDateFilter,
  UsersRoleFilter,
  UsersStatusFilter,
  UsersFiltersMobileTrigger,
} from '../_toolbar/_components';
import { Box } from '@/components/ui';

import { cn } from '@/lib/utils';
import { useUsersFilters } from './_hooks/useUsersFilters';

import { responsiveAdapters } from '@/lib/ui/tokens';

type UsersToolbarProps = {
  hasSelection: boolean;
};

export function UsersToolbar({ hasSelection }: UsersToolbarProps) {
  const { isActive, clear } = useUsersFilters();

  return (
    <div className="flex w-full overflow-x-hidden flex-col gap-2 items-center mdl:flex-row lg:justify-between">
      <Box className="w-full sm:justify-between">
        <UsersSearch disabled={hasSelection} />
        <CreateUser className="hidden sm:flex" />
      </Box>
      {/* Mobile */}
      <div
        className={cn(
          responsiveAdapters.visibility.underSm,
          'w-full flex gap-2 justify-between',
        )}
      >
        <UsersFiltersMobileTrigger disabled={hasSelection} className="flex-1" />
        <ClearSearch
          isActive={isActive}
          onClick={clear}
          className={cn(responsiveAdapters.toolbar.action)}
        />
        <CreateUser className={responsiveAdapters.visibility.underMdl} />
      </div>
      {/* Desktop filters */}

      <div className={cn('hidden sm:flex gap-2 justify-between w-full')}>
        <Box>
          <UsersRoleFilter
            disabled={hasSelection}
            className={responsiveAdapters.toolbar.filter}
          />

          <UsersStatusFilter
            disabled={hasSelection}
            className={responsiveAdapters.toolbar.filter}
          />

          <UsersDateFilter
            disabled={hasSelection}
            className={responsiveAdapters.toolbar.filter}
          />
          <ClearSearch
            isActive={isActive}
            onClick={clear}
            className={cn(responsiveAdapters.toolbar.action)}
          />
        </Box>
        {/* <Box>
          <CreateUser className="flex mdl:hidden" />
        </Box> */}
      </div>
      <CreateUser className={responsiveAdapters.visibility.overMdl} />
    </div>
  );
}
