import { RoleBadge, StatusBadge } from '../components';
import { Button, Checkbox, Link, Select } from '@/components/ui';
import { SquarePen, Trash } from 'lucide-react';

import { normalizeDateTime } from '@/lib/utils/normalizers';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

import { UserRow } from '../../_domain';
import { UsersTableContext } from '../../_domain/users-table-context';
import { TableColumn } from '@/types/ui';

import {
  getUserRowPermissions,
  userActions,
} from '@/lib/permissions/resources';
import { APP_ROLES, AppRole } from '@/types/enums';

export const buildUsersColumns = (): TableColumn<
  UserRow,
  UsersTableContext
>[] => [
  {
    key: 'checkbox',
    header: '',
    variant: 'checkbox',
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
    key: 'name',
    header: 'Name',
    width: 'md',
    grow: false,
    overflow: 'truncate',
    render: (user) => user.name,
  },
  {
    key: 'email',
    header: 'Email',
    width: 'lg',
    overflow: 'truncate',
    render: (user) => user.email,
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
      console.log('createAt', user.createdAt);

      return (
        <div className="flex justify-center">
          <Select
            height="sm"
            focus={false}
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
        </div>
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
        <div className="w-full flex justify-center gap-4">
          <Link
            href={!isSelected ? `/dashboard/users/edit/${user.id}` : '#'}
            variant={!isSelected ? 'success' : 'muted'}
            size="iconSm"
            radius="md"
          >
            <SquarePen size={18} />
          </Link>
          <Button variant="destructive" size="iconSm">
            <Trash size={18} />
          </Button>
        </div>
      );
    },
  },
];
