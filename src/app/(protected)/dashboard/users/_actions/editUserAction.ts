'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { updateUserSchema } from '@/lib/validators';
import { canActOnUser, canEditUserRole } from '@/lib/permissions';
import { editUser } from '@/lib/server/admin/admin-users.service';
import { requireDashboardRole } from '@/lib/server/requireDashboardRole';
import { DASHBOARD_ROLE } from '@/types/server';

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

  if (!canActOnUser(actor.role, target.role)) {
    throw new Error('Forbidden: Cannot act on this user');
  }

  if (!canEditUserRole(actor.role)) {
    throw new Error('Restricted: Only Super Admin can perform role change');
  }

  const { id, ...updateData } = data;

  await editUser(id, updateData);

  revalidatePath('/dashboard/users');
}
