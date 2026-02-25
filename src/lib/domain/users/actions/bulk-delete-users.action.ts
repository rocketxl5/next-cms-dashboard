'use server';

import { revalidatePath } from 'next/cache';
import { requireDashboardUser } from '@/lib/server';
import { canDeleteUser } from '@/lib/permissions/resources/users';
import { deleteUsers, getUsersToDelete } from '@/lib/server/services';

export async function bulkDeleteUsers(userIds: string[]) {
  const actor = await requireDashboardUser();

  const users = await getUsersToDelete(userIds);

  if (users.length !== userIds.length)
    throw new Error('Some users were not found');

  //   Validate ALL before mutating
  for (const user of users) {
    if (!canDeleteUser(actor.role, user.role))
      throw new Error('Forbidden: Some users could not be deleted');
  }

  await deleteUsers(userIds);

  revalidatePath('/dashboard/users');
}
