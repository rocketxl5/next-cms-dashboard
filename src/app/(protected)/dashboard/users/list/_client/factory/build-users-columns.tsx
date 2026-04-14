import { SearchSelect } from '@/app/(protected)/dashboard/components';
import { RoleBadge, StatusBadge } from '../components';
import { Checkbox, Link } from '@/components/ui';
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
    render: (user) => user.name,
  },
  {
    key: 'email',
    header: 'Email',
    render: (user) => user.email,
  },
  {
    key: 'role',
    header: 'Role',
    render: (user, ctx) => {
      const permissions = getUserRowPermissions(ctx.currentUser, user);

      if (!permissions.canUpdateRole) return <RoleBadge role={user.role} />;

      const options: AppRole[] = APP_ROLES.filter((role) =>
        userActions.canUpdateUserRole(ctx.currentUser.role, {
          targetRole: role,
        }),
      );

      return (
        <div className="flex">
          <SearchSelect
            value={user.role}
            options={options}
            handleChange={(role) => ctx.handleUserRoleUpdate(user.id, role)}
          />
        </div>
      );
    },
  },
  {
    key: 'status',
    header: 'Status',
    render: (user) => <StatusBadge status={user.status} />,
  },
  {
    key: 'actions',
    header: 'Actions',
    render: (user, ctx) => {
      const permissions = getUserRowPermissions(ctx.currentUser, user);
      const can = permissions.canEdit;

      if (!can) return null;

      const isSelected = ctx.selectedUserIds.has(user.id);

      return (
        <Link
          href={!isSelected ? `/dashboard/users/edit/${user.id}` : '#'}
          variant={!isSelected ? 'success' : 'muted'}
          size="sm"
          radius="sm"
        >
          Edit
        </Link>
      );
    },
  },
];
