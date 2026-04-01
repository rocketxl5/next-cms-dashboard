'use client';

import { useState } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

import { useToast } from '@/providers';

import { AddToastInput } from '@/types/ui';

type UseAsyncFormSubmitOptions = {
  successToast?: AddToastInput;
  errorToast?: AddToastInput;
  minDuration?: number; // ensure visible loading
};

export function useAsyncFormSubmit<T extends FieldValues>(
  form: UseFormReturn<T>,
  submitFn: (values: T) => Promise<void>,
  options?: UseAsyncFormSubmitOptions,
) {
  const [loading, setLoading] = useState(false);
  const { addToast, success, destructive } = useToast();

  const onSubmit = form.handleSubmit(async (values) => {
    const start = new Date().valueOf();
    setLoading(true);

    try {
      await submitFn(values);

      if (options?.successToast) {
        // Prefer semantic helper if no variant override
        if (options.successToast.variant) {
          addToast(options.successToast);
        } else {
          success(options.successToast);
        }
      }
    } catch (error) {
      if (options?.errorToast) {
        if (options.errorToast.variant) {
          addToast(options.errorToast);
        } else {
          destructive(options.errorToast);
        }
      } else {
        console.error(error);
      }
    } finally {
      // ensure loading is visible for at least X ms
      const min = options?.minDuration ?? 300;
      const elapsed = new Date().valueOf() - start;

      if (elapsed < min) {
        await new Promise((r) => setTimeout(r, min - elapsed));
      }

      setLoading(false);
    }
  });

  return { onSubmit, loading };
}
