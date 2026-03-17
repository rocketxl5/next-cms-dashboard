// import { use } from 'react';
import { UsersPageClient } from '../_client/UsersPageClient';
import { UserRow } from '../_domain';
import { UserSelectionProvider } from '@/providers/UserSelectionProvider';

import { prismaToDashboardUser } from './map/user-row-map';
import { getUsers } from '@/lib/server/services/admin-users.service';
import { requireDashboardUser } from '@/lib/server';
import { parseUsersSearchParams } from '../../_lib/parse-users-search-params';
import { SearchUsersParams } from '@/types/shared';
import {
  USER_SEARCH_FIELDS,
  UserSearchField,
} from '@/types/filters/users.filters';
import { APP_ROLES, AppRole, USER_STATUS, UserStatus } from '@/types/enums';

type UsersPageProps = {
  searchParams?: SearchUsersParams | Promise<SearchUsersParams | undefined>;
};

export default async function UsersPage({ searchParams }: UsersPageProps) {
  // Unwrap async searchParams for server component
  const params = await searchParams;

  const dashboardUser = await requireDashboardUser();

  const parsed = parseUsersSearchParams(params);

  // // search -> search string
  // const search = typeof params?.search === 'string' ? params.search : '';

  // // type -> [email, name]
  // const type: UserSearchField =
  //   typeof params?.type === 'string' &&
  //   USER_SEARCH_FIELDS.includes(params.type as UserSearchField)
  //     ? (params.type as UserSearchField)
  //     : 'email';

  // const role: AppRole | undefined =
  //   typeof params?.role === 'string' &&
  //   APP_ROLES.includes(params.role as AppRole)
  //     ? (params.role as AppRole)
  //     : undefined;

  // const status: UserStatus | undefined =
  //   typeof params?.status === 'string' &&
  //   USER_STATUS.includes(params.status as UserStatus)
  //     ? (params.status as UserStatus)
  //     : undefined;

  const users = await getUsers(parsed);

  const rows: UserRow[] = users
    .map(prismaToDashboardUser)
    .filter((u): u is UserRow => u !== null);

  return (
    <UserSelectionProvider>
      <UsersPageClient users={rows} currentUser={dashboardUser} />
    </UserSelectionProvider>
  );
}
