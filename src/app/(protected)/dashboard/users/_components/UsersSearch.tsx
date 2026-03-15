'use client';

import debounce from 'debounce';
import { useEffect, useMemo } from 'react';
import {useRouter, useSearchParams} from 'next/navigation';

import { SearchField } from '@/components/ui/SearchField';

export function UsersSearch() {
    const router = useRouter()
    const searchParams = useSearchParams();

    const search = searchParams.get('search') ?? '';

    const updateSearch = useMemo(
        () => 
        debounce((value: string) => {
            const params = new URLSearchParams(searchParams);

            if(value) {
                params.set('search', value);
            } else {
                params.delete('search');
            }

            router.replace(`/dashboard/users?${params.toString()}`);
        }, 400)
    , [router, searchParams]);

    useEffect(() => {
        return () => {
            updateSearch.clear();
        }
    }, [updateSearch])

    return (
        <SearchField 
            value={search}
            placeholder='Search users...'
            onChange={updateSearch}
        />
    )

}