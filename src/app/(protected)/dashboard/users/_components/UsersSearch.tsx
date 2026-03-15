'use client';

import debounce from 'debounce';
import { useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { SearchField } from '@/components/ui';
import { SearchSelect } from '../../components/select/SearchSelect';
import { USERS_PARAMS } from '@/types/shared';

export function UsersSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get('search') ?? '';
  const type = searchParams.get('type') ?? 'email'; // default to email

  const searchParamsString = searchParams.toString();

  const updateSearch = useMemo(
    () =>
      debounce((value: string, searchType: string) => {
        const params = new URLSearchParams(searchParamsString);

        params.set('type', searchType);

        if (value) {
          params.set('search', value);
        } else {
          params.delete('search');
        }

        router.replace(`?${params.toString()}`);
      }, 300),
    [router, searchParamsString],
  );

  useEffect(() => {
    return () => {
      updateSearch.clear();
    };
  }, [updateSearch]);

  return (
    <div className="flex gap-2">
      <SearchSelect
        value={type}
        options={USERS_PARAMS}
        handleChange={(newType) => updateSearch(search, newType)}
      />
      <SearchField
        value={search}
        placeholder={`Search users by ${type}...`}
        onChange={(newValue) => updateSearch(newValue, type)}
      />
    </div>
  );
}
