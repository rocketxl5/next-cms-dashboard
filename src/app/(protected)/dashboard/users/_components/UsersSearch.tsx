'use client';

import debounce from 'debounce';
import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

import { Box, Button, Input, Select, Stack } from '@/components/ui';
import { SearchSelect } from '@/app/(protected)/dashboard/components';

import {
  UserSearchField,
  USER_SEARCH_FIELDS,
} from '@/types/shared/pagination/filters/users.filters';
import { AppRole, APP_ROLES, UserStatus, USER_STATUS } from '@/types/enums';
// import { normalizeDisplayString } from '@/lib/utils/normalizers';

export function UsersSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const DEFAULT_TYPE: UserSearchField = 'email';

  // Local state only for instant typing (not synced via effect)
  const [search, setSearch] = useState(searchParams.get('search') ?? '');
  const [type, setType] = useState<UserSearchField>(DEFAULT_TYPE);
  const [role, setRole] = useState<AppRole | ''>('');
  const [status, setStatus] = useState<UserStatus | ''>('');

  const isSearchActive = search.trim() !== '' || role !== '' || status !== '';

  const updateUrl = useMemo(
    () =>
      debounce((updates: Record<string, string | undefined>) => {
        const params = new URLSearchParams(window.location.search);

        Object.entries(updates).forEach(([key, value]) => {
          if (value) params.set(key, value);
          else params.delete(key);
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
    setSearch(value); // instant typing
    updateUrl({ search: value, type }); // debounced URL
  };

  const handleTypeChange = (value: UserSearchField) => {
    setType(value); // instant select
    updateUrl({ type: value }); // debounced URL
  };

  const handleRoleChange = (value: AppRole | '') => {
    setRole(value);
    updateUrl({ role: value || undefined });
  };

  const handleStatusChange = (value: UserStatus | '') => {
    setStatus(value);
    updateUrl({ status: value || undefined });
  };

  const handleReset = (path: string) => {
    // 1. Clear local state
    setSearch('');
    setType(DEFAULT_TYPE);
    setRole('');
    setStatus('');
    // 2. Cancel any pending debounce
    updateUrl.clear();
    // 3. Reset URL cleanly
    router.replace(path);
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
            value={search}
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
            value={role as AppRole}
            options={APP_ROLES}
            handleChange={(value: AppRole) => handleRoleChange(value)}
            placeholder="Role"
          />
          <SearchSelect
            focus={false}
            value={status as UserStatus}
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
