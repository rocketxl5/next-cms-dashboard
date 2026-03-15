import { UsersPageClient } from '../_client/UsersPageClient';
import { UserRow } from '../_domain';
import { UserSelectionProvider } from '@/providers/UserSelectionProvider';

import { prismaToDashboardUser } from './map/user-row-map';
import { getUsers } from '@/lib/server/services/admin-users.service';
import { SearchUsersParams } from '@/types/shared';
import { requireDashboardUser } from '@/lib/server';

type UsersPageProps = {
  searchParams?: SearchUsersParams;
};

export default async function UsersPage({ searchParams }: UsersPageProps) {
  const dashboardUser = await requireDashboardUser();

  const search = searchParams?.search ?? '';
  const type = searchParams?.type ?? 'email';

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
