'use client';

import debounce from 'debounce';
import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

import { Box, Button, Input, Select, Stack } from '@/components/ui';

import { parseUsersQuery } from '../_lib/parse-users-query';
import { updateQueryParams } from '@/lib/url/update-query-params';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

import { UserSearchField, USER_SEARCH_FIELDS } from '@/types/shared/search';
import { AppRole, APP_ROLES, UserStatus, USER_STATUS } from '@/types/enums';
// import { normalizeDisplayString } from '@/lib/utils/normalizers';

export function UsersSearch() {
  // searchParams: Source of truth
  const searchParams = useSearchParams();
  const router = useRouter();
  const DEFAULT_TYPE: UserSearchField = 'email';

  const { filters } = parseUsersQuery(searchParams);

  const { search, type, role, status, createdFrom, createdTo } = filters;

  const isSearchActive =
    search?.trim() !== '' || !!role || !!status || !!createdFrom || !!createdTo;

  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
    // react 19 allowed
    // not a derived full state
    // syncing controlled buffer
    setSearchInput(search);
  }, [search]);

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        const query = updateQueryParams(searchParams, {
          search: value,
          type,
          page: '1',
        });

        router.replace(`?${query}`);
      }, 300),
    [router, searchParams, type],
  );

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.clear();
    };
  }, [debouncedSearch]);

  // helper
  const formatDateForInput = (iso?: string) => {
    if (!iso) return '';
    return iso.split('T')[0];
  };

  // Handlers
  const handleSearchChange = (value: string) => {
    setSearchInput(value); // instant typing
    debouncedSearch(value); // debounced URL
  };

  const handleTypeChange = (value: UserSearchField) => {
    const query = updateQueryParams(searchParams, {
      type: value,
      page: '1',
    });

    router.replace(`?${query}`);
  };

  const handleRoleChange = (value: AppRole | '') => {
    const query = updateQueryParams(searchParams, {
      role: value || undefined,
      page: '1',
    });

    router.replace(`?${query}`);
  };

  const handleStatusChange = (value: UserStatus | '') => {
    const query = updateQueryParams(searchParams, {
      status: value || undefined,
      page: '1',
    });

    router.replace(`?${query}`);
  };

  const handleDateChange = (
    key: 'createdFrom' | 'createdTo',
    value: string,
  ) => {
    const query = updateQueryParams(searchParams, {
      [key]: value || undefined,
      page: '1',
    });

    router.replace(`?${query}`);
  };

  const handleReset = (path: string) => {
    router.replace(`${path}?type=${DEFAULT_TYPE}`);
  };

  return (
    <>
      <Box width="fit" grow={false} className="flex gap-4">
        <Input
          type="date"
          layout="fit"
          placeholder="From"
          value={formatDateForInput(createdFrom)}
          onChange={(e) => handleDateChange('createdFrom', e.target.value)}
        />
        <Input
          type="date"
          layout="fit"
          placeholder="To"
          value={formatDateForInput(createdTo)}
          onChange={(e) => handleDateChange('createdTo', e.target.value)}
        />
      </Box>
      <Box className="flex justify-between" width="1/2">
        <Stack direction="row" justify="between" width="full">
          <Box
            className={cn(
              'flex items-stretch', // important
              'h-10', // or your token: size.height.md
              'rounded-md',
              'border border-[hsl(var(--border))]',
              'focus-within:border-[hsl(var(--border-focus))]',
              'focus-within:ring-1',
              'focus-within:ring-[hsl(var(--border-focus))]',
              'focus-within:ring-inset',
            )}
          >
            <Input
              className={cn(
                'h-full',
                'w-2xs ',
                'rounded-r-none',
                'border-0',
                'focus:ring-0',
                'focus:border-transparent',
                'focus:outline-none',
              )}
              value={searchInput}
              placeholder={`Search by ${normalizeDisplayString(type)}`}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <Select
              className={cn(
                'h-full',
                'appearance-none',
                'border-0',
                'rounded-l-none',
                'bg-transparent!',
                'focus:ring-0',
                'focus:border-transparent',
                'focus:outline-none',
                'pr-12',
              )}
              border="none"
              focus={false}
              value={type}
              onChange={(e) =>
                handleTypeChange(e.target.value as UserSearchField)
              }
            >
              {USER_SEARCH_FIELDS.map((field) => (
                <option key={field} value={field}>
                  {normalizeDisplayString(field)}
                </option>
              ))}
            </Select>
          </Box>
          <Box className="flex gap-4 justify-evenly">
            <Select
              focus={false}
              value={role ?? ''}
              onChange={(e) => handleRoleChange(e.target.value as AppRole)}
            >
              <option value="">Role</option>
              {APP_ROLES.map((role) => (
                <option key={role} value={role}>
                  {normalizeDisplayString(role)}
                </option>
              ))}
            </Select>
            <Select
              focus={false}
              value={status ?? ''}
              onChange={(e) => handleStatusChange(e.target.value as UserStatus)}
            >
              <option value="">Status</option>
              {USER_STATUS.map((status) => (
                <option key={status} value={status}>
                  {normalizeDisplayString(status)}
                </option>
              ))}
            </Select>
            <Button
              onClick={() => handleReset('/dashboard/users')}
              disabled={!isSearchActive}
            >
              Clear Search
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
