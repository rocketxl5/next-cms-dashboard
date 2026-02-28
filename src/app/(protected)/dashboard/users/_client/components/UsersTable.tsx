'use client';

import { UserRow } from '../../_domain';
import { useUserSelection } from '@/providers';
import { CurrentDashboardUser } from '@/types/shared';
import { buildUsersColumns } from '../factory/build-users-columns';

type UsersTableProps = {
  users: UserRow[];
  currentUser: CurrentDashboardUser;
};

export function UsersTable({ users, currentUser }: UsersTableProps) {
  const { selectedUserIds, toggleUserSelection } = useUserSelection();
  const columns = buildUsersColumns(selectedUserIds, toggleUserSelection);

  if (!users.length) return <div className="p4">No users found</div>;

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
