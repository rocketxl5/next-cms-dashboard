import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';

import { buildUserWhere } from '@/lib/shared/build-user-where';

import { DatabaseDashboardUser } from '@/types/db/database-dashboard-user';
import { GetUsersParams } from '@/types/shared/search';
import { PaginatedResult } from '@/types/shared/pagination';
import { UserStatus } from '@/types/enums';
import { AppRole } from '@/types/enums';

// GET USERS
export async function getUser(
  id: string,
): Promise<DatabaseDashboardUser | null> {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      theme: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export async function getUsers({
  filters,
  page,
  limit,
}: GetUsersParams): Promise<PaginatedResult<DatabaseDashboardUser>> {
  const where = buildUserWhere(filters);

  const offset = (page - 1) * limit;

  const [items, total] = await Promise.all([
    prisma.user.findMany({
      where,
      take: limit,
      skip: offset,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        theme: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: 'desc' },
    }),
    prisma.user.count({ where }),
  ]);

  const hasNext = offset + items.length < total;
  const hasPrevious = offset > 0;

  return { items, pagination: { total, hasNext, hasPrevious } };
}

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

// UNITARY ACTIONS
export async function deleteUser(userId: string): Promise<void> {
  await prisma.user.delete({
    where: { id: userId },
  });
}

export async function editUser(
  userId: string,
  data: Prisma.UserUpdateInput,
): Promise<void> {
  await prisma.user.update({
    where: { id: userId },
    data,
  });
}

export async function updateUserRole(
  userId: string,
  role: AppRole,
): Promise<void> {
  await prisma.user.update({
    where: { id: userId },
    data: { role },
  });
}

// BULK ACTIONS
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
