import { useQueryFilters } from '@/hooks';

import { parseUsersQuery } from '@/app/(protected)/dashboard/users/_lib/parse-users-query';

import { AppRole, UserStatus } from '@/types/enums';

export type UserDateFilterKey =
  | 'createdFrom'
  | 'createdTo'
  | 'updatedFrom'
  | 'updatedTo';

export function useUsersFilters() {
  const { update, reset, searchParams } = useQueryFilters();

  const { filters } = parseUsersQuery(searchParams);

  const {
    search,
    role,
    status,
    createdFrom,
    createdTo,
    updatedFrom,
    updatedTo,
  } = filters;

  const hasSearch = !!search.trim();

  const hasFilters =
    !!role ||
    !!status ||
    !!createdFrom ||
    !!createdTo ||
    !!updatedFrom ||
    !!updatedTo;

  return {
    filters,

    isActive: hasSearch || hasFilters,

    setSearch: (search?: string) => update({ search }),

    setSearchType: (type?: string) => update({ type }),

    setRole: (role?: AppRole) => update({ role }),

    setStatus: (status?: UserStatus) => update({ status }),

    updateDateFilter: (key: UserDateFilterKey, value?: string) =>
      update({ [key]: value }),

    clear: () =>
      reset({
        type: 'email',
      }),
  };
}
