import {
  UserSearchField,
  USER_SEARCH_FIELDS,
  ParsedSearchUsersParams,
} from '@/types/shared/search';
import { PaginationQuery } from '@/types/shared/pagination';
import { AppRole, APP_ROLES, UserStatus, USER_STATUS } from '@/types/enums';

export type UsersQuery = {
  query: PaginationQuery;
  filters: ParsedSearchUsersParams;
};

export function parseUsersQuery(params: URLSearchParams): UsersQuery {
  const get = (key: string): string | undefined => {
    if (!params) return;

    if (params instanceof URLSearchParams) {
      return params.get(key) ?? undefined;
    }

    const value = params[key];
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value[0];
    return undefined;
  };

  // pagination
  const page = Math.max(1, Number(get('page') ?? 1));
  const limit = Math.max(1, Number(get('limit') ?? 5));

  // filters
  const search = get('search') ?? undefined;
  const type = get('type') ?? undefined;
  const role = get('role') ?? undefined;
  const status = get('status') ?? undefined;
  const createdFrom = get('createdFrom') ?? undefined;
  const createdTo = get('createdTo') ?? undefined;
  const updatedFrom = get('updatedFrom') ?? undefined;
  const updatedTo = get('updatedTo') ?? undefined;

  return {
    query: { page, limit },

    filters: {
      search: search ?? '',

      type:
        type && USER_SEARCH_FIELDS.includes(type as UserSearchField)
          ? (type as UserSearchField)
          : 'email',

      role:
        role && APP_ROLES.includes(role as AppRole)
          ? (role as AppRole)
          : undefined,

      status:
        status && USER_STATUS.includes(status as UserStatus)
          ? (status as UserStatus)
          : undefined,

      createdFrom: createdFrom,
      createdTo: createdTo,

      updatedFrom: updatedFrom,
      updatedTo: updatedTo,
    },
  };
}
