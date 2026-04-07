import { AppRole } from '../enums/role';
import { UserStatus } from '../enums/status';
import { UserSearchField } from '../filters/users.filters';

export type SearchUsersParams = {
  search?: string;
  type?: UserSearchField;
  role?: AppRole;
  status?: UserStatus;
};

export type GetUsersParams = {
  filters?: SearchUsersParams;
  limit: number;
  offset: number;
};