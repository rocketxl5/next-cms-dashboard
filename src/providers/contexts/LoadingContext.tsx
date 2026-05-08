'use client';

import { createContext } from "react";

export type LoadingContextValue = {
  isLoading: (key: string) => boolean;
  start: (key: string) => void;
  stop: (key: string) => void;
  reset: () => void;
  withLoading: <T>(key: string, fn: () => Promise<T>) => Promise<T>;
};

export const LoadingContext = createContext<LoadingContextValue | null>(null);

