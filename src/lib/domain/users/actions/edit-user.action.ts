'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { updateUserSchema } from '@/lib/validators';
import { userActions } from '@/lib/permissions/resources';
import { editUser } from '@/lib/server/services';
import { requireDashboardRole } from '@/lib/server';
import { DASHBOARD_ROLE } from '@/types/shared';

export async function editUserAction(rawData: object) {
  const actor = await requireDashboardRole({ roles: DASHBOARD_ROLE });

  const data = updateUserSchema.parse(rawData);

  const target = await prisma.user.findUnique({
    where: { id: data.id },
    select: { id: true, role: true },
  });

  if (!target) {
    throw new Error('User not found');
  }

  if (!userActions.canEditUserRole(actor.role, target.role)) {
    throw new Error('Restricted: Only Super Admin can perform role change');
  }

  const { id, ...updateData } = data;

  await editUser(id, updateData);

  revalidatePath('/dashboard/users');
}
