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
  const { success, destructive } = useToast();

  const onSubmit = form.handleSubmit(async (values) => {
    if (!form.formState.isDirty) return;

    const start = new Date().valueOf();
    setLoading(true);

    try {
      await submitFn(values);

      form.reset(values);

      if (options?.successToast) {
        success(options.successToast);
      }
    } catch (error) {
      if (options?.errorToast) {
        destructive(options.errorToast);
      }
    } finally {
      // ensure loading is visible for at least X ms
      const min = options?.minDuration ?? 300;
      const elapsed = new Date().valueOf() - start;
      const remaining = Math.max(0, min - elapsed);

      setTimeout(() => setLoading(false), remaining);
    }
  });

  return { onSubmit, loading };
}
