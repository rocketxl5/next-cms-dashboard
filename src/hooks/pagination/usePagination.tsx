'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { updateQueryParams } from '@/lib/url/update-query-params';

import { PaginationMeta } from '@/types/shared';

export function usePagination(meta?: PaginationMeta) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get('page') ?? 1);
  const limit = Number(searchParams.get('limit') ?? 5);

  function setPage(nextPage: number) {
    const query = updateQueryParams(searchParams, {
      page: String(nextPage),
      limit: String(limit),
    });

    router.push(`?${query}`);
  }

  function nextPage() {
    if (meta && !meta.hasNext) return;
    setPage(page + 1);
  }

  function prevPage() {
    if (meta && !meta.hasPrevious) return;
    setPage(Math.max(1, page - 1));
  }

  function setLimit(newLimit: number) {
    const query = updateQueryParams(searchParams, {
      page: '1',
      limit: String(newLimit),
    });

    router.push(`?${query}`);
  }

  return {
    page,
    limit,
    setPage,
    nextPage,
    prevPage,
    setLimit,
  };
}