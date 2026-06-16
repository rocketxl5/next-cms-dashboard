import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { updateQueryParams } from '@/lib/url/update-query-params';

type UpdateParams = Record<string, string | undefined>;

type Options = {
  resetPage?: boolean;
};

export function useQueryFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const update = (params: UpdateParams, options?: Options) => {
    const query = updateQueryParams(searchParams, {
      ...params,
      ...(options?.resetPage !== false ? { page: '1' } : {}),
    });

    router.replace(`${pathname}?${query}`);
  };

    const reset = (
    params?: Record<string, string | undefined>,
  ) => {
    const query = new URLSearchParams();

    Object.entries(params ?? {}).forEach(([key, value]) => {
      if (value) {
        query.set(key, value);
      }
    });

    const url = query.toString()
      ? `${pathname}?${query}`
      : pathname;

    router.replace(url);
  };

  return {
    update,
    reset,
    searchParams,
  };
}