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
  const get = (key: string): string | undefined => params.get(key) ?? undefined;

  const pageValue = Number(get('page'));
  const limitValue = Number(get('limit'));

  const page = Number.isFinite(pageValue) && pageValue > 0 ? pageValue : 1;

  const limit = Number.isFinite(limitValue) && limitValue > 0 ? limitValue : 25;

  const search = get('search');
  const type = get('type');

  const role = get('role');
  const status = get('status');

  const createdFrom = get('createdFrom');
  const createdTo = get('createdTo');

  const updatedFrom = get('updatedFrom');
  const updatedTo = get('updatedTo');

  return {
    query: {
      page,
      limit,
    },

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

      createdFrom,
      createdTo,

      updatedFrom,
      updatedTo,
    },
  };
}