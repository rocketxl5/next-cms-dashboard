import { UsersTable } from '../_client/components/UsersTable';
import { getUsers } from '@/lib/server/admin/admin-users.service';
import { prismaToDashboardUser } from '../_map/user-row-map';
import { UserRow } from '../_domain';
import { requireDashboardUser } from '@/lib/server';

export default async function UsersPage() {
  const dashboardUser = await requireDashboardUser();

  const users = await getUsers();
  const rows: UserRow[] = users
    .map(prismaToDashboardUser)
    .filter((u): u is UserRow => u !== null);

  return <UsersTable users={rows} currentUser={dashboardUser} />;
}
