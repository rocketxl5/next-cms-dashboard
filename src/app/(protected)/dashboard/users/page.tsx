import { UsersPageClient } from './list/_client/UsersPageClient';
import { UserSelectionProvider } from '@/providers/UserSelectionProvider';

import { prismaToDashboardUser } from './list/_map/user-row-map';

import { getUsers } from '@/lib/server/services/admin-users.service';
import { normalizeSearchParams } from '@/lib/utils/normalizers';
import { requireDashboardUser } from '@/lib/server';

import { parseUsersQuery } from './_lib/parse-users-query';

import { UserRow } from './list/_domain';

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function DashboardUsersPage({ searchParams }: PageProps) {
  const dashboardUser = await requireDashboardUser();

  const resolvedSearchParams = await searchParams;

  const params = normalizeSearchParams(resolvedSearchParams);

  const { query, filters } = parseUsersQuery(params);

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
        pagination={pagination}
      />
    </UserSelectionProvider>
  );
}
