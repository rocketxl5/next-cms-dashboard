import { getUsers } from '@/lib/server/admin/admin-users.service';
import { prismaToDashboardUser } from '../_map/user-row-map';
import { UserRow } from '../_domain';
import { requireDashboardUser } from '@/lib/server';
import { UserDashboardClient } from '../_client/components/UsersDashboardClient';
import { UserSelectionProvider } from '@/providers/UserSelectionProvider';

export default async function UsersPage() {
  const dashboardUser = await requireDashboardUser();
  const users = await getUsers();
  const rows: UserRow[] = users
    .map(prismaToDashboardUser)
    .filter((u): u is UserRow => u !== null);

  return (
    <UserSelectionProvider>
      <UserDashboardClient users={rows} currentUser={dashboardUser} />
    </UserSelectionProvider>
  );
}
