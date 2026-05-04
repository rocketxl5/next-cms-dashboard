'use client';

import debounce from 'debounce';
import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Input, Select, Box, Button } from '@/components/ui';

import { cn } from '@/lib/utils';

import { updateQueryParams } from '@/lib/url/update-query-params';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

import { UserSearchField, USER_SEARCH_FIELDS } from '@/types/shared/search';

type UsersSearchProps = {
  filters: Record<string, string | undefined>;
  onSearchChange: (value: string) => void;
  onClear: () => void;
  isActive: boolean;
};

export function UsersSearch({
  filters,
  onSearchChange,
  onClear,
  isActive,
}: UsersSearchProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

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

  // const handleSearchChange = (value: string) => {
  //   setSearchInput(value);
  //   debouncedSearch(value);
  // };

  const handleTypeChange = (value: UserSearchField) => {
    const query = updateQueryParams(searchParams, {
      type: value,
      page: '1',
    });

    router.replace(`?${query}`);
  };

  return (
    <Box gap="lg">
      <Box
        height="sm"
        className={cn(
          'flex items-stretch rounded-md',
          'border border-[hsl(var(--border))]',
          'focus-within:border-[hsl(var(--border-focus))]',
          'focus-within:ring-1 focus-within:ring-[hsl(var(--border-focus))]',
          'focus-within:ring-inset',
        )}
      >
        <Input
          height="auto"
          className={cn(
            'w-sm',
            'rounded-r-none border-0',
            'focus:ring-0 focus:outline-none',
          )}
          value={searchInput}
          placeholder={`Search by ${normalizeDisplayString(type)}`}
          onChange={(e) => onSearchChange(e.target.value)}
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
      <Button
        height="sm"
        textSize="sm"
        width="auto"
        onClick={onClear}
        disabled={!isActive}
      >
        Clear Search
      </Button>
    </Box>
  );
}
