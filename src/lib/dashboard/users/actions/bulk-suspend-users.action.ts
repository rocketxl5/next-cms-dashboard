'use server';

import { revalidatePath } from 'next/cache';
import { requireDashboardUser } from '@/lib/server';
import { canSuspendUser } from '@/lib/permissions/dashboard/actions/users';
import { getUsersToSuspend, updateUsersStatus } from '@/lib/server/services';

export async function bulkSuspendUsers(userIds: string[]) {
  const actor = await requireDashboardUser();

  const users = await getUsersToSuspend(userIds);

  if (users.length !== userIds.length)
    throw new Error('Some users were not found');

  //   Validate ALL before mutating
  for (const user of users) {
    if (!canSuspendUser(actor.role, user.role))
      throw new Error('Forbidden: Some users could not be deleted');
  }

  await updateUsersStatus(userIds, 'SUSPENDED');

  revalidatePath('/dashboard/users');
}
