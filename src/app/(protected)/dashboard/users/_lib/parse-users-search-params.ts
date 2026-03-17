import { SearchUsersParams } from '@/types/shared';
import {
  UserSearchField,
  USER_SEARCH_FIELDS,
} from '@/types/filters/users.filters';
import { AppRole, APP_ROLES, UserStatus, USER_STATUS } from '@/types/enums';

export function parseUsersSearchParams(params?: SearchUsersParams | undefined) {
  return {
    // search -> search string
    search: typeof params?.search === 'string' ? params.search : '',

    // type -> [email, name]
    type:
      typeof params?.type === 'string' &&
      USER_SEARCH_FIELDS.includes(params.type as UserSearchField)
        ? (params.type as UserSearchField)
        : 'email',

    // role -> select
    role:
      typeof params?.role === 'string' &&
      APP_ROLES.includes(params.role as AppRole)
        ? (params.role as AppRole)
        : undefined,

    // status -> select
    status:
      typeof params?.status === 'string' &&
      USER_STATUS.includes(params.status as UserStatus)
        ? (params.status as UserStatus)
        : undefined,
  };
}
