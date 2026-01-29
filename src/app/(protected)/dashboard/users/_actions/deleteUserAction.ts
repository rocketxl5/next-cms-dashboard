'use server';

import { revalidatePath } from 'next/cache';
import { deleteUser } from '@/lib/server/admin/admin-users.service';
import { requireRole } from '@/lib/server';

export async function deleteUserAction(userId: string) {
  await requireRole({
    roles: ['SUPER_ADMIN'],
  });

  await deleteUser(userId);
  revalidatePath('/dashboard/users');
}
