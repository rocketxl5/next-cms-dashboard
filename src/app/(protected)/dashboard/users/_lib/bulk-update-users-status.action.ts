'use server';

import { revalidatePath } from 'next/cache';
import { requireDashboardUser } from '@/lib/server';
import { canUpdateUserStatus } from '@/lib/permissions/resources/users/actions';
import {
  getUsersRoleAndStatus,
  updateUsersStatus,
} from '@/lib/server/services';
import { UserStatus } from '@/types/enums';

export async function bulkUpdateUsersStatus(
  userIds: string[],
  nextStatus: UserStatus,
) {
  const actor = await requireDashboardUser();

  const users = await getUsersRoleAndStatus(userIds);

  if (users.length !== userIds.length)
    throw new Error('Some users were not found');

  for (const user of users) {
    const canUpdate = canUpdateUserStatus(
      actor.role,
      user.role,
      user.status,
      nextStatus,
    );

    if (!canUpdate)
      throw new Error(
        `Forbidden: User ${user.id} from ${user.status} to ${nextStatus}`,
      );
  }

  await updateUsersStatus(userIds, nextStatus);
   
  revalidatePath('/dashboard/users');
}
