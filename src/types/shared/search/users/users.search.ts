import { QueryParams } from '../../pagination';

import { AppRole } from '@/types/enums/role';
import { UserStatus } from '@/types/enums/status';

export const USER_SEARCH_FIELDS = ['name', 'email'] as const;

export type UserSearchField = (typeof USER_SEARCH_FIELDS)[number];

export type RawSearchUsersParams = {
  search?: string;
  type?: UserSearchField;
  role?: AppRole;
  status?: UserStatus;
};

export type ParsedSearchUsersParams = {
  search: string;
  type: UserSearchField;
  role?: AppRole;
  status?: UserStatus;
};

export type GetUsersParams = QueryParams<ParsedSearchUsersParams>;