'use client';

import { useState } from 'react';

import { useToast } from '@/providers';

import { AddToastInput } from '@/types/ui/toast';

type ToastResolver<TArgs extends unknown[], TResult> =
  | AddToastInput
  | ((result: TResult, ...args: TArgs) => AddToastInput);

type UseAsyncActionOptions<TArgs extends unknown[], TResult> = {
  successToast?: ToastResolver<TArgs, TResult>;
  errorToast?: ToastResolver<TArgs, TResult>;
  minDuration?: number;
  onSuccess?: (result: TResult) => void;
  onError?: (error: unknown) => void;
};

export function useAsyncAction<TArgs extends unknown[], TResult>(
  action: (...args: TArgs) => Promise<TResult>,
  options?: UseAsyncActionOptions<TArgs, TResult>,
) {
  const [loading, setLaoding] = useState(false);

  const { success, destructive } = useToast();

  async function execute(...args: TArgs): Promise<TResult> {
    const start = Date.now();

    setLaoding(true);

    try {
      const result = await action(...args);

      const successToast =
        typeof options?.successToast === 'function'
          ? options.successToast(result, ...args)
          : options?.successToast;

      if (successToast) {
        success(successToast);
      }

      options?.onSuccess?.(result);

      return result;
    } catch (error) {
      const errorToast =
        typeof options?.errorToast === 'function'
          ? options.errorToast(undefined as TResult, ...args)
          : options?.errorToast;

      if (errorToast) {
        destructive(errorToast);
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
