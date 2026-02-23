'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { requireDashboardUser } from '@/lib/server';
import { canDeleteUser } from '@/lib/permissions/dashboard/actions/users';
import { deleteUsers, getUsersById } from '@/lib/server/admin';

export async function bulkDeleteUsers(userIds: string[]) {
  const actor = await requireDashboardUser();

  const users = await getUsersById(userIds);

  if (users.length !== userIds.length)
    throw new Error('Some users were not found');

  //   Validate ALL before mutating
  for (const user of users) {
    if (!canDeleteUser(actor.role, user.role))
      throw new Error('Forbidden: Some users could not be deleted');
  }

  await deleteUsers(userIds)

  revalidatePath('/dashboard/users')
}
