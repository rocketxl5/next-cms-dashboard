// lib/server/admin/admin-users.service.ts
import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { DatabaseDashboardUser } from '@/types/db/database-dashboard-user';

export async function getUsers(): Promise<DatabaseDashboardUser[]> {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      theme: true,
      isActive: true,
      isVerified: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: { createdAt: 'desc' },
  });
}

export async function deleteUser(userId: string): Promise<void> {
  await prisma.user.delete({
    where: { id: userId },
  });
}

export async function editUser(id: string, data: Prisma.UserUpdateInput) {
  return prisma.user.update({
    where: { id },
    data,
  });
}
