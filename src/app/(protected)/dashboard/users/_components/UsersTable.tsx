import { usersColumns } from '../_ui/users-table.columns';
import { DashboardUserRow } from '../_domain';
import { CurrentDashboardUser } from '@/types/shared';

type UsersTableProps = {
  users: DashboardUserRow[];
  currentUser: CurrentDashboardUser;
};

export function UsersTable({ users, currentUser }: UsersTableProps) {
  if (!users.length) return <div className="p4">No users found</div>;

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {usersColumns.map((column) => (
            <th key={column.key} className="text-left px-4 py-2">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="border-t">
            {usersColumns.map((column) => (
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
