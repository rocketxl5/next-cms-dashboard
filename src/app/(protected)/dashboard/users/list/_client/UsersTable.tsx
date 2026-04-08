'use client';

import { useRouter } from 'next/navigation';

import { UserRow } from '../_domain';

import { useUserSelection } from '@/providers';
import { buildUsersColumns } from './factory/build-users-columns';
import { updateUserRoleAction } from '@/lib/domain/users/actions/single';

import { CurrentDashboardUser, PaginationState } from '@/types/shared';
import { AppRole } from '@/types/enums';

type UsersTableProps = {
  users: UserRow[];
  currentUser: CurrentDashboardUser;
  pagination: PaginationState;
};

export function UsersTable({
  users,
  currentUser,
  pagination,
}: UsersTableProps) {
  const { selectedUserIds, toggleUserSelection } = useUserSelection();
  const router = useRouter();

  async function handleUserRoleUpdate(userId: string, role: AppRole) {
    await updateUserRoleAction(userId, role);
    router.refresh();
  }

  const columns = buildUsersColumns(
    selectedUserIds,
    toggleUserSelection,
    handleUserRoleUpdate,
  );

  if (!users.length) return <div className="p4">No users found</div>;

  console.log(pagination);

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="text-left px-4 py-2">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="border-t">
            {columns.map((column) => (
              <td key={column.key} className="px-4 py-2">
                {column.render(user, currentUser)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
