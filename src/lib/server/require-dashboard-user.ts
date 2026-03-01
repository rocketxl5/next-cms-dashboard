import { redirect } from 'next/navigation';
import { getSession } from './get-session';
import { CurrentDashboardUser } from '@/types/shared';
import { toDashboardUser } from '@/app/(protected)/dashboard/users/_map/dashboard-user-map';

export async function requireDashboardUser(): Promise<CurrentDashboardUser> {
  const session = await getSession();

  if (!session?.user) {
    redirect('/auth/signin');
  }

  const dashboardUser = toDashboardUser(session.user.id, session.user.role);

  if (!dashboardUser) {
    redirect('/403'); // or '/unauthorized'
  }

  return dashboardUser;
}
