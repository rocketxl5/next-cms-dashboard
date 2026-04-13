import { UserRow } from '../_domain';
import { DatabaseDashboardUser } from '@/types/db/database-dashboard-user';

/**
 * Maps Prisma user to UserRow.
 * Returns null if role is not allowed in dashboard.
 */
export function prismaToDashboardUser(user: DatabaseDashboardUser): UserRow {
  // drop theme (not listed in users dashboard)
  const { theme, ...rest } = user;

  return {
    id: rest.id,
    name: rest.name,
    email: rest.email,
    role: rest.role, // TypeScript knows this is DashboardRole
    status: rest.status,
    createdAt: rest.createdAt.toISOString(),
    updatedAt: rest.updatedAt.toISOString(),
  };
}
