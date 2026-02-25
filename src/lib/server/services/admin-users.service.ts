// lib/server/admin/admin-users.service.ts
import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { DatabaseDashboardUser } from '@/types/db/database-dashboard-user';
import { UserStatus } from '@/types/enums';

export async function getUsers(): Promise<DatabaseDashboardUser[]> {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      theme: true,
      status: true,
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

// BULK SERVICES
export async function getUsersRole(userIds: string[]) {
  return prisma.user.findMany({
    where: { id: { in: userIds } },
    select: { id: true, role: true },
  });
}

export async function getUsersRoleAndStatus(userIds: string[]) {
  return prisma.user.findMany({
    where: { id: { in: userIds } },
    select: { id: true, role: true, status: true },
  });
}

export async function deleteUsers(userIds: string[]): Promise<void> {
  await prisma.user.deleteMany({
    where: { id: { in: userIds } },
  });
}

export async function updateUsersStatus(
  userIds: string[],
  status: UserStatus,
): Promise<void> {
  await prisma.user.updateMany({
    where: {
      id: { in: userIds },
      status: { not: status }, // idempotent
    },
    data: {
      status,
    },
  });
}
