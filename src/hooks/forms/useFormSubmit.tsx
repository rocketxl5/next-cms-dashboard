'use client';

import { FieldValues, UseFormSetError } from 'react-hook-form';

import { apiFetch } from '@/lib/api/api-fetch';
import { submitForm } from '@/lib/form';

type ApiFetchBody = Record<string, unknown> | string | null;

type UseFormSubmitOptions<
  TData extends FieldValues,
  TPayload extends ApiFetchBody = TData,
> = {
  endpoint: string;
  transform?: (data: TData) => TPayload;
  onSuccess?: () => void;
  setError?: UseFormSetError<TData>;
};

export function useFormSubmit<
  TData extends FieldValues,
  TPayload extends ApiFetchBody = TData,
>({
  endpoint,
  transform,
  onSuccess,
  setError,
}: UseFormSubmitOptions<TData, TPayload>) {
  return async function submit(data: TData) {
    const payload = transform ? transform(data) : data;

    await submitForm<TData, void>({
      setError,

      action: async () => {
        await apiFetch(endpoint, {
          method: 'POST',
          body: payload,
        });
      },

      onSuccess: () => {
        onSuccess?.();
      },
    });
  };
}