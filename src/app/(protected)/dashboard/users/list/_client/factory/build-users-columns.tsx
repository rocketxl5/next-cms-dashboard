'use client';

import { SquarePen, Trash } from 'lucide-react';
import { RoleBadge, StatusBadge } from '../_components';
import { Box, Button, Checkbox, Link, Select } from '@/components/ui';

import {
  normalizeDateTime,
  normalizeDisplayString,
} from '@/lib/utils/normalizers';
import {
  getUserRowPermissions,
  userActions,
} from '@/lib/permissions/resources';

import { TableColumn } from '@/types/ui';
import { APP_ROLES, AppRole } from '@/types/enums';
import { UserRow, UsersTableContext } from '../../../_domain';

export const buildUsersColumns = (): TableColumn<
  UserRow,
  UsersTableContext
>[] => [
  {
    key: 'checkbox',
    header: (ctx: UsersTableContext) => {
      return (
        <Checkbox
          checked={ctx.isAllSelected}
          indeterminate={ctx.isIndeterminate}
          onChange={ctx.toggleAllUsers}
        />
      );
    },
    preset: 'checkbox',
    width: 'sm',
    align: 'center',
    render: (user, ctx) => {
      const permissions = getUserRowPermissions(ctx.currentUser, user);

      if (!permissions.canAct) return null;

      return (
        <Checkbox
          id={`select-${user.id}`}
          checked={ctx.selectedUserIds.has(user.id)}
          onChange={() => ctx.toggleUserSelection(user.id)}
        />
      );
    },
  },
  {
    key: 'email',
    header: 'Email',
    width: 'lg',
    align: 'left',
    overflow: 'truncate',
    render: (user) => user.email,
  },
  {
    key: 'name',
    header: 'Name',
    width: 'md',
    grow: false,
    overflow: 'truncate',
    align: 'left',
    render: (user) => user.name,
  },
  {
    key: 'role',
    header: 'Role',
    align: 'center',
    render: (user, ctx) => {
      const permissions = getUserRowPermissions(ctx.currentUser, user);

      if (!permissions.canUpdateRole) return <RoleBadge role={user.role} />;

      const options: AppRole[] = APP_ROLES.filter((role) =>
        userActions.canUpdateUserRole(ctx.currentUser.role, {
          targetRole: role,
        }),
      );

      return (
        <Box layout="center">
          <Select
            height="sm"
            width="control"
            padding="sm"
            value={user.role}
            onChange={(e) =>
              ctx.handleUserRoleUpdate(user.id, e.target.value as AppRole)
            }
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {normalizeDisplayString(option)}
              </option>
            ))}
          </Select>
        </Box>
      );
    },
  },
  {
    key: 'status',
    header: 'Status',
    width: 'lg',
    align: 'center',
    render: (user) => <StatusBadge status={user.status} />,
  },
  {
    key: 'created',
    header: 'Created',
    width: 'md',
    align: 'center',
    render: (user) => normalizeDateTime(user.createdAt),
  },
  {
    key: 'updated',
    header: 'Updated',
    width: 'md',
    align: 'center',
    render: (user) => normalizeDateTime(user.updatedAt),
  },
  {
    key: 'actions',
    header: 'Actions',
    width: 'md',
    align: 'center',
    render: (user, ctx) => {
      const permissions = getUserRowPermissions(ctx.currentUser, user);
      const canEdit = permissions.canEdit;

      if (!canEdit) return null;

      const isSelected = ctx.selectedUserIds.has(user.id);

      return (
        <Box layout="center" gap="md">
          <Link
            width="square"
            height="sm"
            padding="none"
            href={`/dashboard/users/edit/${user.id}`}
            variant="success"
            disabled={isSelected}
          >
            <SquarePen size={18} />
          </Link>
          <Button
            variant="destructive"
            height="sm"
            width="square"
            layout="inline"
            disabled={isSelected}
            onClick={() => {
              ctx.handleDeleteUser(user);
            }}
          >
            <Trash size={18} />
          </Button>
        </Box>
      );
    },
  },
];
