import prisma from '@/lib/prisma';
import { DatabaseDashboardUser } from '@/types/db/database-dashboard-user';

export async function getUsers(): Promise<DatabaseDashboardUser[]> {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      isVerified: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: { createdAt: 'desc' },
  });
}