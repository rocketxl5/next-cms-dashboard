import { AppRole } from '../../enums/role';
import { UserStatus } from '../../enums/status';
import { UserSearchField } from './filters/users.filters';
import { QueryParams } from './pagination.query';

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