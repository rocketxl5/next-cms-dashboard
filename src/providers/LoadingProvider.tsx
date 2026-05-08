'use client';

import { useState, useCallback, ReactNode } from 'react';

import { LoadingContext } from './contexts/LoadingContext';

export type LoadingState = Record<string, boolean>;

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LoadingState>({});

  const start = useCallback((key: string) => {
    setState((prev) => ({ ...prev, [key]: true }));
  }, []);

  const stop = useCallback((key: string) => {
    setState((prev) => ({ ...prev, [key]: false }));
  }, []);

  const reset = useCallback(() => {
    setState({});
  }, []);

  const withLoading = useCallback(
    async <T,>(key: string, fn: () => Promise<T>): Promise<T> => {
      start(key);

      try {
        return await fn();
      } finally {
        stop(key);
      }
    },
    [start, stop],
  );

  const isLoading = useCallback((key: string) => !!state[key], [state]);

  return (
    <LoadingContext.Provider
      value={{ isLoading, start, stop, reset, withLoading }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

// Usage: 
// isLoading('save')
// isLoading('delete')
// isLoading('upload')
