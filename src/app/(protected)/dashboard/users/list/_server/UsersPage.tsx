import { UsersPageClient } from '../_client/UsersPageClient';
import { UserRow } from '../_domain';

import { UserSelectionProvider } from '@/providers/UserSelectionProvider';

import { prismaToDashboardUser } from './map/user-row-map';

import { getUsers } from '@/lib/server/services/admin-users.service';
import { requireDashboardUser } from '@/lib/server';
import { parseUsersSearchParams } from '../../_lib/parse-users-search-params';

import { SearchUsersParams } from '@/types/shared';

type UsersPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function UsersPage({ searchParams }: UsersPageProps) {
  // Unwrap async searchParams for server component

  const dashboardUser = await requireDashboardUser();

  const filters: SearchUsersParams = parseUsersSearchParams(searchParams);

  const page = Number(searchParams?.page ?? 1);
  const limit = Number(searchParams?.limit ?? 5);

  const { items, pagination } = await getUsers({
    filters,
    page,
    limit,
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
          query: { page, limit },
        }}
      />
    </UserSelectionProvider>
  );
}
