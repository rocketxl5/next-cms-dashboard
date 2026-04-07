import {
  UserSearchField,
  USER_SEARCH_FIELDS,
} from '@/types/filters/users.filters';
import { AppRole, APP_ROLES, UserStatus, USER_STATUS } from '@/types/enums';
import { SearchUsersParams } from '@/types/shared';
import { UndoIcon } from 'lucide-react';

type ParamsProps = SearchUsersParams | URLSearchParams;

export function parseUsersSearchParams(
  params?: ParamsProps,
): SearchUsersParams {
  if (!params) return {};

  // unified getter handles both scenarias API route (req.nextUrl) and server page (params.role // 'ADMIN')
  const get = (key: keyof SearchUsersParams): string | undefined => {
    if (params instanceof URLSearchParams) {
      return params.get(key) ?? undefined;
    }

    const value = params[key];
    return typeof value === 'string' ? value : undefined;
  };

  // handle URLSearchParams
  const search = get('search');
  const type = get('type');
  const role = get('role');
  const status = get('status');

  return {
    // search
    search: search ?? '',

    // type
    type:
      type && USER_SEARCH_FIELDS.includes(type as UserSearchField)
        ? (type as UserSearchField)
        : 'email',

    // role
    role:
      role && APP_ROLES.includes(role as AppRole)
        ? (role as AppRole)
        : undefined,

    // status
    status:
      status && USER_STATUS.includes(status as UserStatus)
        ? (status as UserStatus)
        : undefined,
  };
}
