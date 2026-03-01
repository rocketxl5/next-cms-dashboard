'use server';

import { revalidatePath } from 'next/cache';
import { requireDashboardUser } from '@/lib/server';
import { updateUserSchema } from '@/lib/validators';
import { canEditUser } from '@/lib/permissions/resources/users/actions';
import { editUser, getUser } from '@/lib/server/services';

export async function editUserAction(userId: string, rawData: object) {
  const actor = await requireDashboardUser();

  const data = updateUserSchema.parse(rawData);

  const user = await getUser(userId);

  if (!user) throw new Error('Missing user');

  const { id, ...updateData } = data;

  await editUser(id, updateData);

  revalidatePath('/dashboard/users');
}
