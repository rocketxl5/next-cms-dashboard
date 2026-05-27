'use server';

import { deleteUser } from '@/lib/server/services';
import { requireDashboardUser } from '@/lib/server';
import { hasPermission } from '@/lib/permissions/has-permission';

import { USER_CAPABILITIES } from '@/lib/permissions/model/capabilities/domains';

export async function deleteUserAction(targetUserId: string) {
  const actor = await requireDashboardUser();

  if (
    !hasPermission(actor.role, USER_CAPABILITIES.DELETE, {
      actorUserId: actor.id,
      targetUserId,
    })
  ) {
    throw new Error('Forbidden');
  }

  await deleteUser(targetUserId);
}
