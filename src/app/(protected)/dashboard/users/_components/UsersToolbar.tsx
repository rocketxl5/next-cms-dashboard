'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { Box, Link, Toolbar } from '@/components/ui';
import { UsersSearch, UsersFilters, UsersBulkActions } from './';

import { BulkUserAction } from '../list/_domain';
import { parseUsersQuery } from '../_lib/parse-users-query';
import { updateQueryParams } from '@/lib/url/update-query-params';

type UsersToolbarProps = {
  allowedBulkActions: BulkUserAction[];
  hasSelection: boolean;
};

export function UsersToolbar({
  allowedBulkActions,
  hasSelection,
}: UsersToolbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { filters } = parseUsersQuery(searchParams);

  const {
    role,
    status,
    createdFrom,
    createdTo,
    updatedFrom,
    updatedTo,
    search,
    type,
  } = filters;

  const hasSearch = !!search?.trim();
  const hasFilters =
    !!role ||
    !!status ||
    !!createdFrom ||
    !!createdTo ||
    !!updatedFrom ||
    !!updatedTo;

  const isActive = hasSearch || hasFilters;

  const activeCount = [
    search,
    role,
    status,
    createdFrom,
    createdTo,
    updatedFrom,
    updatedTo,
  ].filter(Boolean).length;

  const update = (params: Record<string, string | undefined>) => {
    const query = updateQueryParams(searchParams, {
      ...params,
      page: '1',
    });

    router.replace(`${pathname}?${query}`);
  };

  const handleReset = () => {
    router.replace(`/dashboard/users?type=email`);
  };

  return (
    <Box className="flex-wrap" gap="lg">
      <Box width="full" layout="between">
        <UsersBulkActions
          allowedBulkActions={allowedBulkActions}
          hasSelection={hasSelection}
        />
        <UsersSearch
          filters={{ search, type }}
          onSearchChange={(value: string) =>
            update({ search: value || undefined })
          }
          onClear={handleReset}
          isActive={isActive}
        />
        <Link
          height="sm"
          textSize="sm"
          href="/dashboard/users/create"
          variant="foreground"
        >
          Create User
        </Link>
      </Box>
      <UsersFilters
        filters={filters}
        onUpdate={update}
        activeCount={activeCount}
        isActive={isActive}
      />
    </Box>
  );
}
