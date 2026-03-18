'use client';

import debounce from 'debounce';
import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Button, SearchField } from '@/components/ui';
import { SearchSelect } from '@/app/(protected)/dashboard/components';

import {
  UserSearchField,
  USER_SEARCH_FIELDS,
} from '@/types/filters/users.filters';
import { AppRole, APP_ROLES, UserStatus, USER_STATUS } from '@/types/enums';

export function UsersSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Local state only for instant typing (not synced via effect)
  const [search, setSearch] = useState(searchParams.get('search') ?? '');
  const [type, setType] = useState<UserSearchField>('email');
  const [role, setRole] = useState<AppRole | ''>('');
  const [status, setStatus] = useState<UserStatus | ''>('');

  const updateUrl = useMemo(
    () =>
      debounce((updates: Record<string, string | undefined>) => {
        const params = new URLSearchParams(window.location.search);
        console.log('updates', updates);
        console.log('params', `${params.toString()}`);

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
    router.replace(path);
  };

  return (
    <div className="flex flex-col gap-2">
      <SearchSelect
        value={type}
        options={USER_SEARCH_FIELDS}
        handleChange={(value: UserSearchField) => handleTypeChange(value)}
      />
      <SearchField
        value={search}
        placeholder={`Search by ${type}`}
        onChange={handleSearchChange}
      />
      <SearchSelect
        value={role as AppRole}
        options={APP_ROLES}
        handleChange={(value: AppRole) => handleRoleChange(value)}
        placeholder="Role"
      />
      <SearchSelect
        value={status as UserStatus}
        options={USER_STATUS}
        handleChange={(value: UserStatus) => handleStatusChange(value)}
        placeholder="Status"
      />
      <Button onClick={() => handleReset('/dashboard/users')}>
        Clear Search
      </Button>
    </div>
  );
}
