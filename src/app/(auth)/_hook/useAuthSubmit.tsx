import { apiFetch } from '@/lib/api/api-fetch';
import { submitForm } from '@/lib/form/submit-form';

import { SessionUser } from '@/types/shared';

type JsonObject = Record<string, unknown>;

type UseAuthSubmitOptions<
  TData extends JsonObject,
  TPayload extends JsonObject = TData,
> = {
  endpoint: string;
  transform?: (data: TData) => TPayload;
  onSuccess?: (user: SessionUser) => void;
};

export function useAuthSubmit<
  TData extends JsonObject,
  TPayload extends JsonObject = TData,
>({ endpoint, transform, onSuccess }: UseAuthSubmitOptions<TData, TPayload>) {
  return async function submit(data: TData) {
    const payload = transform ? transform(data) : data;

    await submitForm({
      action: async () => {
        const result = await apiFetch<{
          user: SessionUser;
        }>(endpoint, {
          method: 'POST',
          body: payload,
        });
        return result.user;
      },
      onSuccess,
    });
  };
}
