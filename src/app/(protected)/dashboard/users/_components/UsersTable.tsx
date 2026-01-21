import { UserRow } from '../_domain/user-row';
import { usersColumns } from '../_ui/users-table.columns';

type UsersTableProps = {
  users: UserRow[];
};

export function UsersTable({ users }: UsersTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-muted">
          <tr>
            {usersColumns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-3 text-left font-medium text-muted-foreground"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
}
