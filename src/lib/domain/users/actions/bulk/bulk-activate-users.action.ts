'use server';

import { revalidatePath } from 'next/cache';
import { requireDashboardUser } from '@/lib/server';
import { canActivateUser } from '@/lib/permissions/resources/users/actions';
import { getUsersRoleAndStatus, updateUsersStatus } from '@/lib/server/services';

export async function bulkActivateUsers(userIds: string[]) {
  const actor = await requireDashboardUser();

  const users = await getUsersRoleAndStatus(userIds);

  if (users.length !== userIds.length)
    throw new Error('Some users were not found');

  //   Validate ALL before mutating
  for (const user of users) {
    if (!canActivateUser(actor.role, user.role))
      throw new Error('Forbidden: Some users could not be deleted');
  }

  await updateUsersStatus(userIds, 'ACTIVE');

  revalidatePath('/dashboard/users');
}