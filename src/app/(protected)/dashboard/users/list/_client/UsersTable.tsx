'use client';

import { Box, Pagination } from '@/components/ui';

import { useUserSelection } from '@/providers';
import { buildUsersColumns } from './factory/build-users-columns';

import { cn } from '@/lib/utils';
import { tableTokens } from '@/lib/ui/tokens';
import { cellVariants } from '@/lib/ui/variants';
import { useUpdateRoleAction } from '../../_hooks';

import { UserRow, UsersTableContext } from '../_domain';
import { CurrentDashboardUser, PaginationMeta } from '@/types/shared';

type UsersTableProps = {
  users: UserRow[];
  currentUser: CurrentDashboardUser;
  pagination: PaginationMeta;
};

export function UsersTable({
  users,
  currentUser,
  pagination,
}: UsersTableProps) {
  const {
    selectedUserIds,
    toggleUserSelection,
    toggleAllUsers,
    isAllSelected,
    isIndeterminate,
    hasSelection,
  } = useUserSelection();

  const roleUpdate = useUpdateRoleAction();

  const tableContext: UsersTableContext = {
    currentUser,
    // 🔹 selection (from provider)
    selectedUserIds,
    toggleUserSelection,
    toggleAllUsers,
    isAllSelected,
    isIndeterminate,
    hasSelection,
    // 🔹 domain
    handleUserRoleUpdate: roleUpdate.execute,
  };

  const columns = buildUsersColumns();

  const resolvedColumns = columns.map((col) => ({
    ...col,
    className: cellVariants({
      preset: col.preset,
      size: col.size,
      width: col.width,
      grow: col.grow,
      overflow: col.overflow,
      align: col.align,
    }),
  }));

  if (!users.length) return <div className="p4">No users found</div>;

  return (
    <Box direction="col" gap="lg" className={tableTokens.wrapper.responsive}>
      <table className={tableTokens.base}>
        <thead>
          <tr className={tableTokens.row.base}>
            {resolvedColumns.map((column, i) => (
              <th
                key={column.key}
                className={cn(
                  column.className,
                  i === 0 && 'w-11 whitespace-nowrap',
                )}
              >
                {typeof column.header === 'function'
                  ? column.header(tableContext)
                  : column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className={cn(tableTokens.row.base, tableTokens.row.striped)}
            >
              {resolvedColumns.map((column) => (
                <td
                  key={column.key}
                  className={cn(tableTokens.cell.content, column.className)}
                >
                  {column.render(user, tableContext)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination pagination={pagination} />
    </Box>
  );
}
