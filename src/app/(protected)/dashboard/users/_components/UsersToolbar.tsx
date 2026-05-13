'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { Box, Button, Link } from '@/components/ui';
import { SearchSlash, UserRoundPlus } from 'lucide-react';

import { BulkUserAction } from '../list/_domain';
import { parseUsersQuery } from '../_lib/parse-users-query';
import { updateQueryParams } from '@/lib/url/update-query-params';

import { UsersSearch, UsersFilters, UsersBulkActions } from './';

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
    <Box width="full" justify="between" gap="lg">
      <UsersBulkActions
        allowedBulkActions={allowedBulkActions}
        hasSelection={hasSelection}
      />
      <Box gap="lg">
        <UsersFilters
          filters={filters}
          onUpdate={update}
          activeCount={activeCount}
          isActive={isActive}
          disabled={hasSelection}
        />
        <UsersSearch
          filters={{ search, type }}
          onSearchChange={(value: string) =>
            update({ search: value || undefined })
          }
        />
        <Button
          height="sm"
          textSize="sm"
          width="auto"
          variant="contrast"
          onClick={handleReset}
          disabled={!isActive}
        >
          <SearchSlash size={20} />
        </Button>
      </Box>
      <Link
        className="h-10"
        width="square"
        padding="none"
        radius="full"
        variant="success"
        href="/dashboard/users/create"
        title="Create User"
      >
        <UserRoundPlus size={22} />
      </Link>
    </Box>
  );
}
