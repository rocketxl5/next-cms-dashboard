'use server';

import { deleteUser } from '@/lib/server/services';
import { requireDashboardUser } from '@/lib/server';
import { hasPermission } from '@/lib/permissions/has-permission';

import { USER_CAPABILITIES } from '@/lib/permissions/model/capabilities/domains';
import { AppRole } from '@/types/enums';

export async function deleteUserAction(userId: string, userRole: AppRole) {
  const actor = await requireDashboardUser();

  if (
    !hasPermission(actor.role, USER_CAPABILITIES.DELETE, {
      actorUserId: actor.id,
      targetRole: userRole,
      targetUserId: userId,
    })
  ) {
    throw new Error('Forbidden');
  }

  await deleteUser(userId);
}
