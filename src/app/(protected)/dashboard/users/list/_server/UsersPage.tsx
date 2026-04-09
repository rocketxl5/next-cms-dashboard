import { UsersPageClient } from '../_client/UsersPageClient';
import { UserRow } from '../_domain';

import { UserSelectionProvider } from '@/providers/UserSelectionProvider';

import { prismaToDashboardUser } from './map/user-row-map';

import { getUsers } from '@/lib/server/services/admin-users.service';
import { requireDashboardUser } from '@/lib/server';

import { parseUsersQuery } from '../../_lib/parse-users-query';

type UsersPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function UsersPage({ searchParams }: UsersPageProps) {
  // Unwrap async searchParams for server component

  const dashboardUser = await requireDashboardUser();

  const { query, filters } = parseUsersQuery(searchParams);

  const { items, pagination } = await getUsers({
    filters,
    page: query.page,
    limit: query.limit,
  });

  const rows: UserRow[] = items
    .map(prismaToDashboardUser)
    .filter((u): u is UserRow => u !== null);

  return (
    <UserSelectionProvider>
      <UsersPageClient
        users={rows}
        currentUser={dashboardUser}
        pagination={{
          meta: pagination,
          query,
        }}
      />
    </UserSelectionProvider>
  );
}
