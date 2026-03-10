import { prismaToDashboardUser } from '../../_server/map/user-row-map';
import { UserRow } from '../../_domain';
import { UsersPageClient } from '../_client/UsersPageClient';
import { UserSelectionProvider } from '@/providers/UserSelectionProvider';
import { getUsers } from '@/lib/server/services/admin-users.service';
import { requireDashboardUser } from '@/lib/server';

export default async function UsersPage() {
  const dashboardUser = await requireDashboardUser();
  const users = await getUsers();
  const rows: UserRow[] = users
    .map(prismaToDashboardUser)
    .filter((u): u is UserRow => u !== null);

  return (
    <UserSelectionProvider>
      <UsersPageClient users={rows} currentUser={dashboardUser} />
    </UserSelectionProvider>
  );
}
