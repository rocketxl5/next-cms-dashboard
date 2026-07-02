'use client';

import debounce from 'debounce';
import { useState, useEffect, useMemo } from 'react';
import { useUsersFilters } from '../../_hooks/useUsersFilters';

import { Box, Input, Select } from '@/components/ui';

import { cn } from '@/lib/utils';
import { responsiveAdapters } from '@/lib/ui/tokens';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

import { UsersToolbarContext } from '../domain/users-dashboard-filters';
import { UserSearchField, USER_SEARCH_FIELDS } from '@/types/shared/search';

export function UsersSearch({ disabled }: UsersToolbarContext) {
  const { filters, setSearch, setSearchType } = useUsersFilters();

  const { search, type } = filters;

  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearch(value || undefined);
      }, 300),
    [setSearch],
  );

  useEffect(() => {
    return () => {
      debouncedSearch.clear();
    };
  }, [debouncedSearch]);

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
    debouncedSearch(value);
  };
  return (
    <Box
      height="lg"
      className={cn(
        'flex items-stretch rounded-md',
        'border border-base',
        'focus-within:border-[hsl(var(--border-focus))]',
        'focus-within:ring-1 focus-within:ring-[hsl(var(--border-focus))]',
        'focus-within:ring-inset',
        responsiveAdapters.toolbar.search,
      )}
    >
      <Input
        className={cn(
          'w-4/5 rounded-r-none border-0',
          'focus:ring-0 focus:outline-none',
          'md:h-auto',
        )}
        disabled={disabled}
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
        disabled={disabled}
        value={type}
        onChange={(e) => setSearchType(e.target.value as UserSearchField)}
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
