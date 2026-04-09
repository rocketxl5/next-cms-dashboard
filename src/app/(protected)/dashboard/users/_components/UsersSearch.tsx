'use client';

import debounce from 'debounce';
import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

import { Box, Button, Input, Stack } from '@/components/ui';
import { SearchSelect } from '@/app/(protected)/dashboard/components';

import {
  UserSearchField,
  USER_SEARCH_FIELDS,
} from '@/types/shared/pagination/filters/users.filters';
import { parseUsersQuery } from '../_lib/parse-users-query';
import { AppRole, APP_ROLES, UserStatus, USER_STATUS } from '@/types/enums';
// import { normalizeDisplayString } from '@/lib/utils/normalizers';

export function UsersSearch() {
  const router = useRouter();
  // searchParams: Source of truth
  const searchParams = useSearchParams();
  const DEFAULT_TYPE: UserSearchField = 'email';

  const { filters } = parseUsersQuery(searchParams);

  const { search, type, role, status } = filters;

  const isSearchActive = search?.trim() !== '' || !!role || !!status;

  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
    // react 19 allowed
    // not a derived full state
    // syncing controlled buffer
    setSearchInput(search);
  }, [search]);

  const updateUrl = useMemo(
    () =>
      debounce((updates: Record<string, string | undefined>) => {
        const params = new URLSearchParams(window.location.search);

        Object.entries(updates).forEach(([key, value]) => {
          if (value !== undefined && value !== '') {
            params.set(key, value);
          } else {
            params.delete(key);
          }
        });

        router.replace(`?${params.toString()}`);
      }, 300),
    [router],
  );

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      updateUrl.clear();
    };
  }, [updateUrl]);

  // Handlers
  const handleSearchChange = (value: string) => {
    setSearchInput(value); // instant typing
    updateUrl({ search: value, type }); // debounced URL
  };

  const handleTypeChange = (value: UserSearchField) => {
    updateUrl({ type: value }); // debounced URL
  };

  const handleRoleChange = (value: AppRole | '') => {
    updateUrl({ role: value || undefined });
  };

  const handleStatusChange = (value: UserStatus | '') => {
    updateUrl({ status: value || undefined });
  };

  const handleReset = (path: string) => {
    // cancel any pending debounce
    updateUrl.clear();
    // reset URL cleanly
    // router.replace(path);
    router.replace(`${path}?type=${DEFAULT_TYPE}`);
  };

  return (
    <Box className="flex justify-between" width="1/2">
      <Stack direction="row" justify="between" width="full">
        <Box
          className={cn(
            'flex rounded-md',
            'border border-[hsl(var(--border))]',
            'focus-within:border-[hsl(var(--border-focus))]',
            'focus-within:ring-1',
            'focus-within:ring-[hsl(var(--border-focus))]',
            'focus-within:ring-inset',
          )}
        >
          <Input
            className={cn(
              'w-2xs ',
              'rounded-r-none',
              'border-0',
              'focus:ring-0',
              'focus:border-transparent',
              'focus:outline-none',
            )}
            value={searchInput}
            placeholder={`Search by ${type}`}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          {/* <div className="w-px h-6 bg-border" /> */}
          <SearchSelect
            className={cn(
              'appearance-none',
              'border-0',
              'rounded-l-none',
              'bg-transparent!',
              'focus:ring-0',
              'focus:border-transparent',
              'focus:outline-none',
            )}
            focus={false}
            value={type}
            border="none"
            options={USER_SEARCH_FIELDS}
            handleChange={(value: UserSearchField) => handleTypeChange(value)}
          />
        </Box>
        <Box className="flex gap-4 justify-evenly">
          <SearchSelect
            focus={false}
            value={role ?? ''}
            options={APP_ROLES}
            handleChange={(value: AppRole) => handleRoleChange(value)}
            placeholder="Role"
          />
          <SearchSelect
            focus={false}
            value={status ?? ''}
            options={USER_STATUS}
            handleChange={(value: UserStatus) => handleStatusChange(value)}
            placeholder="Status"
          />
          <Button
            onClick={() => handleReset('/dashboard/users')}
            disabled={!isSearchActive}
          >
            Clear Search
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
