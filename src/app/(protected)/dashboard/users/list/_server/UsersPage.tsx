import { UsersPageClient } from '../_client/UsersPageClient';
import { UserRow } from '../_domain';
import { UserSelectionProvider } from '@/providers/UserSelectionProvider';

import { prismaToDashboardUser } from './map/user-row-map';
import { getUsers } from '@/lib/server/services/admin-users.service';
import { requireDashboardUser } from '@/lib/server';
import { parseUsersSearchParams } from '../../_lib/parse-users-search-params';
import { SearchUsersParams } from '@/types/shared';
type UsersPageProps = {
  searchParams?: SearchUsersParams | Promise<SearchUsersParams | undefined>;
};

export default async function UsersPage({ searchParams }: UsersPageProps) {
  // Unwrap async searchParams for server component
  const params = await searchParams;

  const dashboardUser = await requireDashboardUser();

  const parsed = parseUsersSearchParams(params);

  const { users } = await getUsers({
    filters: parsed,
    limit: 25,
    offset: 0,
  });

  const rows: UserRow[] = users
    .map(prismaToDashboardUser)
    .filter((u): u is UserRow => u !== null);

  return (
    <UserSelectionProvider>
      <UsersPageClient users={rows} currentUser={dashboardUser} />
    </UserSelectionProvider>
  );
}
