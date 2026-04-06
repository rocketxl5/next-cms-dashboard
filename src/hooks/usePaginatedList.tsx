'use client';

import { useState, useMemo, useCallback } from 'react';
import { useLoading } from '@/providers/LoadingProvider';

type LoadMoreResult<T> = {
  items: T[];
  hasMore?: boolean;
};

type UsePaginatedListProps<T> = {
  items: T[];
  pageSize: number;

  // optional async loader (enables server mode)
  onLoadMore?: (params: {
    offset: number;
    limit: number;
  }) => Promise<LoadMoreResult<T>>;

  loadingKey?: string;
};

export function usePaginatedList<T>({
  items,
  pageSize,
  onLoadMore,
  loadingKey = 'pagination',
}: UsePaginatedListProps<T>) {
  const { isLoading, start, stop } = useLoading();

  // 🔹 unified state (client + server)
  const [internalItems, setInternalItems] = useState<T[]>(items);
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [serverHasMore, setServerHasMore] = useState(true);

  const isServerMode = !!onLoadMore;

  // 🔹 source of truth
  const sourceItems = isServerMode ? internalItems : items;

  const clampedCount = Math.min(visibleCount, sourceItems.length);

  const visibleItems = useMemo(() => {
    return sourceItems.slice(0, clampedCount);
  }, [sourceItems, clampedCount]);

  const hasMore = isServerMode
    ? serverHasMore
    : clampedCount < sourceItems.length;

  const loadMore = useCallback(async () => {
    // CLIENT MODE
    if (!isServerMode) {
      setVisibleCount((prev) => prev + pageSize);
      return;
    }

    // SERVER MODE
    start(loadingKey);

    try {
      const result = await onLoadMore({
        offset: internalItems.length,
        limit: pageSize,
      });

      setInternalItems((prev) => [...prev, ...result.items]);

      if (result.hasMore !== undefined) {
        setServerHasMore(result.hasMore);
      } else {
        // fallback if backend doesn't send it
        if (result.items.length < pageSize) {
          setServerHasMore(false);
        }
      }

      setVisibleCount((prev) => prev + pageSize);
    } finally {
      stop(loadingKey);
    }
  }, [
    isServerMode,
    onLoadMore,
    internalItems.length,
    pageSize,
    loadingKey,
    start,
    stop,
  ]);

  const reset = useCallback(() => {
    setVisibleCount(pageSize);
    setInternalItems(items);
    setServerHasMore(true);
  }, [items, pageSize]);

  return {
    visibleItems,
    loadMore,
    hasMore,
    isLoading: isLoading(loadingKey),
    total: items.length,
    count: clampedCount,
    reset,
  };
}
