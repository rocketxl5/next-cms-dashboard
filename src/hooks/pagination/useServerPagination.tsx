'use client';

import { useState, useMemo, useCallback } from 'react';

import { clampVisibleCount } from './clampVisibleCount';
import { useLoading } from '@/providers/LoadingProvider';

type LoadMoreResult<T> = {
  items: T[];
  hasMore?: boolean;
};

type Props<T> = {
  initialData: T[];
  pageSize: number;
  onLoadMore: (params: {
    offset: number;
    limit: number;
  }) => Promise<LoadMoreResult<T>>;
  loadingKey: string;
};

export function useServerPagination<T>({
  initialData,
  pageSize,
  onLoadMore,
  loadingKey,
}: Props<T>) {
  const { isLoading, start, stop } = useLoading();

  const [items, setItems] = useState<T[]>(initialData);
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [hasMore, setHasMore] = useState(true);

  const clampedCount = clampVisibleCount(visibleCount, items.length);

  const visibleItems = useMemo(() => {
    return items.slice(0, clampedCount);
  }, [items, clampedCount]);

  const loadMore = useCallback(async () => {
    start(loadingKey);

    try {
      const result = await onLoadMore({
        offset: items.length,
        limit: pageSize,
      });

      setItems((prev) => [...prev, ...result.items]);

      if (result.hasMore !== undefined) {
        setHasMore(result.hasMore);
      } else if (result.items.length < pageSize) {
        setHasMore(false);
      }

      setVisibleCount((prev) => prev + pageSize);
    } finally {
      stop(loadingKey);
    }
  }, [items.length, pageSize, onLoadMore, loadingKey, start, stop]);

  const reset = useCallback(() => {
    setItems(initialData);
    setVisibleCount(pageSize);
    setHasMore(true);
  }, [initialData, pageSize]);

  return {
    visibleItems,
    loadMore,
    hasMore,
    isLoading: isLoading(loadingKey),
    total: items.length,
    visibleCount: clampedCount,
    reset,
  };
}
