'use client';

import { useState, useMemo, useCallback } from 'react';

import { clampVisibleCount } from './clampVisibleCount';

type Props<T> = {
  items: T[];
  pageSize: number;
};

export function useClientPagination<T>({ items, pageSize }: Props<T>) {
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const clampedCount = clampVisibleCount(visibleCount, items.length);

  const visibleItems = useMemo(() => {
    return items.slice(0, clampedCount);
  }, [items, clampedCount]);

  const hasMore = clampedCount < items.length;

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => prev + pageSize);
  }, [pageSize]);

  return {
    visibleItems,
    hasMore,
    loadMore,
    visibleCount: clampedCount,
    total: items.length,
  };
}
