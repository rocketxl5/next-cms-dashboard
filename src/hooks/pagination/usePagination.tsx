'use client';

import { useRouter, useSearchParams } from "next/navigation";

export function usePagination() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const page = Number(searchParams.get('page') ?? 1);
    const limit = Number(searchParams.get('limit') ?? 25);

    function setPage(nextPage: number) {
        const params = new URLSearchParams(searchParams.toString());

        params.set('page', String(nextPage));
        params.set('limit', String(limit));

        router.push(`?${params.toString()}`);
    }

    function nextPage() {
        setPage(page + 1);
    }

    function prevPage() {
        setPage(Math.max(1, page - 1));
    }

    function setLimit(newLimit: number) {
        const params = new URLSearchParams(searchParams.toString());

        params.set('limit', String(newLimit));
        params.set('page', '1'); // reset pagination

        router.push(`?${params.toString()}`);
    }

     return {
      page,
      limit,
      setPage,
      nextPage,
      prevPage,
      setLimit,
     }
}