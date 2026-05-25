'use client';

import { useState } from 'react';

import { useToast } from '@/providers';

import { AddToastInput } from '@/types/ui';

type UseAsyncActionOptions<TResult> = {
  successToast?: AddToastInput;
  errorToast?: AddToastInput;
  minDuration?: number;
  onSuccess?: (result: TResult) => void;
  onError?: (error: unknown) => void;
};

export function useAsyncAction<TArgs extends unknown[], TResult>(
  action: (...args: TArgs) => Promise<TResult>,
  options?: UseAsyncActionOptions<TResult>,
) {
  const [loading, setLaoding] = useState(false);

  const { success, destructive } = useToast();

  async function execute(...args: TArgs): Promise<TResult> {
    const start = Date.now();

    setLaoding(true);

    try {
      const result = await action(...args);

      if (options?.successToast) {
        success(options.successToast);
      }

      return result;
    } catch (error) {
      if (options?.errorToast) {
        destructive(options.errorToast);
      }

      options?.onError?.(error);

      throw error;
    } finally {
      const min = options?.minDuration ?? 300;

      const elapsed = Date.now() - start;

      const remaining = Math.max(0, min - elapsed);

      setTimeout(() => setLaoding(false), remaining);
    }
  }

  return {
    execute,
    loading,
  };
}
