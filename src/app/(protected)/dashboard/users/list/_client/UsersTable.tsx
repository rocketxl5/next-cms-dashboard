'use client';

import { useRouter } from 'next/navigation';

import { Box, Pagination } from '@/components/ui';

import { useUserSelection } from '@/providers';
import { buildUsersColumns } from './factory/build-users-columns';

import { cn } from '@/lib/utils';
import { cellVariants } from '@/lib/ui/variants';
import { updateUserRoleAction } from '@/lib/domain/users/actions/single';
import { cellTokens, tableTokens } from '@/lib/ui/tokens';

import { AppRole } from '@/types/enums';
import { CurrentDashboardUser, PaginationMeta } from '@/types/shared';
import { UserRow, UsersTableContext } from '../_domain';

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
  } = useUserSelection();
  const router = useRouter();

  async function handleUserRoleUpdate(userId: string, role: AppRole) {
    await updateUserRoleAction(userId, role);
    router.refresh();
  }

  const tableContext: UsersTableContext = {
    currentUser,

    // 🔹 selection (from provider)
    selectedUserIds,
    toggleUserSelection,
    toggleAllUsers,
    isAllSelected,
    isIndeterminate,

    // 🔹 domain
    handleUserRoleUpdate,
  };

  const columns = buildUsersColumns();

  const resolvedColumns = columns.map((col) => ({
    ...col,
    className: cellVariants({
      variant: col.variant,
      size: col.size,
      width: col.width,
      grow: col.grow,
      overflow: col.overflow,
      align: col.align,
    }),
  }));

  if (!users.length) return <div className="p4">No users found</div>;

  return (
    <Box layout="col" gap="lg">
      <table className={tableTokens.base.table}>
        <thead>
          <tr className={tableTokens.base.headerRow}>
            {resolvedColumns.map((column) => (
              <th
                key={column.key}
                className={cn(cellTokens.base.header, column.className)}
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
            <tr key={user.id} className={` ${tableTokens.base.row}`}>
              {resolvedColumns.map((column) => (
                <td
                  key={column.key}
                  className={cn(cellTokens.base.cell, column.className)}
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
