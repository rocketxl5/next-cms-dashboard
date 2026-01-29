import { UsersTable } from './UsersTable';
import { getUsers } from '@/lib/server/admin/admin-users.service';
import { prismaToDashboardUser } from '../_map/user-row-map';
import { DashboardUserRow } from '../_domain';
import { requireDashboardUser } from '@/lib/server';

export default async function UsersPage() {
  const dashboardUser = await requireDashboardUser();

  const users = await getUsers();
  const rows: DashboardUserRow[] = users
    .map(prismaToDashboardUser)
    .filter((u): u is DashboardUserRow => u !== null);

  return <UsersTable users={rows} currentUser={dashboardUser} />;
}
