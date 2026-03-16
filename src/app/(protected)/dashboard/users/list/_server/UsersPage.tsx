// import { use } from 'react';
import { UsersPageClient } from '../_client/UsersPageClient';
import { UserRow } from '../_domain';
import { UserSelectionProvider } from '@/providers/UserSelectionProvider';

import { prismaToDashboardUser } from './map/user-row-map';
import { getUsers } from '@/lib/server/services/admin-users.service';
import { requireDashboardUser } from '@/lib/server';
import { SearchUsersParams } from '@/types/shared';
import {
  USER_SEARCH_FIELDS,
  UserSearchField,
} from '@/types/filters/users.filters';

type UsersPageProps = {
  searchParams?: SearchUsersParams | Promise<SearchUsersParams | undefined>;
};

export default async function UsersPage({ searchParams }: UsersPageProps) {
  // Unwrap async searchParams for server component
  const params = await searchParams;

  const dashboardUser = await requireDashboardUser();

  // Parse search string
  const search = typeof params?.search === 'string' ? params.search : '';
  // Parse type and validate
  const type: UserSearchField =
    typeof params?.type === 'string' &&
    USER_SEARCH_FIELDS.includes(params.type as UserSearchField)
      ? (params.type as UserSearchField)
      : 'email';

  const users = await getUsers({ search, type });

  const rows: UserRow[] = users
    .map(prismaToDashboardUser)
    .filter((u): u is UserRow => u !== null);

  return (
    <UserSelectionProvider>
      <UsersPageClient users={rows} currentUser={dashboardUser} />
    </UserSelectionProvider>
  );
}
