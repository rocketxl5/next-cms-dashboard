'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';

export type LoadingState = Record<string, boolean>;

export type LoadingContextValue = {
  isLoading: (key: string) => boolean;
  start: (key: string) => void;
  stop: (key: string) => void;
  reset: () => void;
};

const LoadingContext = createContext<LoadingContextValue | null>(null);

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

  const isLoading = useCallback((key: string) => !!state[key], [state]);

  return (
    <LoadingContext.Provider value={{ isLoading, start, stop, reset }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }

  return context;
}

// Usage: 
// isLoading('save')
// isLoading('delete')
// isLoading('upload')
