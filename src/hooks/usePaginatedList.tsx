'use client';

import { useState, useEffect, useMemo } from 'react';

type UsePaginatedListProps<T> = {
  items: T[];
  pageSize: number;
};

export function usePaginatedList<T>({
  items,
  pageSize,
}: UsePaginatedListProps<T>) {
  const [itemsCount, setItemsCount] = useState(pageSize);

  const clampedCount = Math.min(itemsCount, items.length);

  const visibleItems = useMemo(() => {
    return items.slice(0, clampedCount);
  }, [items, clampedCount]);

  const hasMore = clampedCount < items.length;

  const loadMore = () => {
    setItemsCount((prev) => prev + pageSize);
  };

  const reset = () => {
    setItemsCount(pageSize);
  };

  return {
    visibleItems,
    hasMore,
    loadMore,
    reset,
    total: items.length,
    count: clampedCount,
  };
}
