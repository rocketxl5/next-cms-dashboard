'use client';

import debounce from 'debounce';
import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Input, Select, Box } from '@/components/ui';

import { cn } from '@/lib/utils';
import { parseUsersQuery } from '../_lib/parse-users-query';
import { updateQueryParams } from '@/lib/url/update-query-params';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

import { UserSearchField, USER_SEARCH_FIELDS } from '@/types/shared/search';

export function UsersSearch() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { filters } = parseUsersQuery(searchParams);
  const { search, type } = filters;

  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
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

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
    debouncedSearch(value);
  };

  const handleTypeChange = (value: UserSearchField) => {
    const query = updateQueryParams(searchParams, {
      type: value,
      page: '1',
    });

    router.replace(`?${query}`);
  };

  return (
    <Box
      className={cn(
        'flex items-stretch h-10 rounded-md',
        'border border-[hsl(var(--border))]',
        'focus-within:border-[hsl(var(--border-focus))]',
        'focus-within:ring-1 focus-within:ring-[hsl(var(--border-focus))]',
        'focus-within:ring-inset',
      )}
    >
      <Input
        className={cn(
          'h-full w-2xs',
          'rounded-r-none border-0',
          'focus:ring-0 focus:outline-none',
        )}
        value={searchInput}
        placeholder={`Search by ${normalizeDisplayString(type)}`}
        onChange={(e) => handleSearchChange(e.target.value)}
      />

      <Select
        className={cn(
          'h-full appearance-none border-0',
          'rounded-l-none bg-transparent!',
          'focus:ring-0 focus:outline-none pr-12',
        )}
        border="none"
        focus={false}
        value={type}
        onChange={(e) => handleTypeChange(e.target.value as UserSearchField)}
      >
        {USER_SEARCH_FIELDS.map((field) => (
          <option key={field} value={field}>
            {normalizeDisplayString(field)}
          </option>
        ))}
      </Select>
    </Box>
  );
}
