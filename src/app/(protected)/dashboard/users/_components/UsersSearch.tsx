'use client';

import debounce from 'debounce';
import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { SearchField } from '@/components/ui';
import { SearchSelect } from '../../components/select/SearchSelect';
import {
  UserSearchField,
  USER_SEARCH_FIELDS,
} from '@/types/filters/users.filters';

export function UsersSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlSearch = searchParams.get('search') ?? '';
  const urlType = searchParams.get('type') ?? 'email'; // default to email

  // Local state only for instant typing (not synced via effect)
  const [search, setSearch] = useState(urlSearch);
  const [type, setType] = useState(urlType);

  //   const searchParamsString = searchParams.toString();

  const updateUrl = useMemo(
    () =>
      debounce((value: string, searchType: string) => {
        const params = new URLSearchParams(window.location.search);

        params.set('type', searchType);

        if (value) params.set('search', value);
        else params.delete('search');

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
    updateUrl(value, type); // debounced URL
  };

  const handleTypeChange = (newType: UserSearchField) => {
    setType(newType); // instant select
    updateUrl(search, newType); // debounced URL
  };

  return (
    <div className="flex gap-2">
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
    </div>
  );
}
