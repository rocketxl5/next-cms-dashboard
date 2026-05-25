'use server';

import { requireDashboardUser } from '@/lib/server';
import { updateUserRole } from '@/lib/server/services';
import { hasPermission } from '@/lib/permissions/has-permission';
import { USER_CAPABILITIES } from '@/lib/permissions/model/capabilities/domains';
import { AppRole } from '@/types/enums';

export async function updateUserRoleAction(
  targetUserId: string,
  role: AppRole,
) {
  const actor = await requireDashboardUser();

  if (
    !hasPermission(actor.role, USER_CAPABILITIES.UPDATE_ROLE, {
      actorUserId: actor.id,
      targetUserId,
      targetRole: role,
    })
  ) {
    throw new Error('Forbidden');
  }

  await updateUserRole(targetUserId, role);
}
