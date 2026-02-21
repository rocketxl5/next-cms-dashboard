/**
 * deleteUserAction
 * ----------------
 * Server Action responsible for deleting a user from the dashboard.
 *
 * Responsibilities:
 * - Enforces authorization (SUPER_ADMIN only) via requireRole
 * - Executes the deletion through the admin user service
 * - Revalidates the dashboard users page to keep UI in sync
 *
 * Security notes:
 * - This action must only be callable by authorized dashboard roles
 * - UI permission checks (canDeleteUser / canActOnUser) are NOT sufficient alone
 * - requireRole provides the real server-side protection
 *
 * Runtime notes:
 * - Runs in Node.js runtime (Prisma usage)
 * - Must not be imported into client or edge-only code
 *
 * @param userId - ID of the user to delete
 */

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
