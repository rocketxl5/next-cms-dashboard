// _map/prisma-to-dashboard-user.ts
import { Role } from '@prisma/client';
import { deriveUserStatus, UserRow } from '../_domain';

type PrismaUser = {
  id: string;
  name: string | null;
  email: string;
  role: Role;
  isActive: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Maps Prisma user to UserRow.
 * Returns null if role is not allowed in dashboard.
 */
export function prismaToDashboardUser(user: PrismaUser): UserRow | null {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role, // TypeScript knows this is DashboardRole
    status: deriveUserStatus({
      isActive: user.isActive,
      isVerified: user.isVerified,
    }),
    isActive: user.isActive,
    isVerified: user.isVerified,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
  };
}
