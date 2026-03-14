import {
  DashboardActionButton,
  RoleSelect,
} from '@/app/(protected)/dashboard/components';
import {
  RoleBadge,
  StatusBadge,
} from '../components';
import { Checkbox } from '@/components/ui';
import { Link } from '@/components/ui';
import { UserRow, UsersColumn } from '../../_domain';
import {
  getUserRowPermissions,
  userActions,
} from '@/lib/permissions/resources';
import { APP_ROLES, AppRole } from '@/types/enums';

export const buildUsersColumns = (
  selectedUserIds: Set<string>,
  toggleUserSelection: (id: string) => void,
  handleUserRoleUpdate: (userId: string, role: AppRole) => void,
): UsersColumn<UserRow>[] => [
  {
    key: 'checkbox',
    header: '',
    render: (user, currentUser) => {
      const permissions = getUserRowPermissions(currentUser, user);

      if (!permissions.canAct) return null;

      return (
        <Checkbox
          id={`select-${user.id}`}
          checked={selectedUserIds.has(user.id)}
          onChange={() => toggleUserSelection(user.id)}
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
    render: (user, currentUser) => {
      const permissions = getUserRowPermissions(currentUser, user);

      if (!permissions.canUpdateRole) return <RoleBadge role={user.role} />;

      const options: AppRole[] = APP_ROLES.filter((role) =>
        userActions.canUpdateUserRole(currentUser.role, { targetRole: role }),
      );

      return (
        <RoleSelect
          value={user.role}
          options={options}
          handleChange={(role) => handleUserRoleUpdate(user.id, role)}
        />
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
    render: (user, currentUser) => {
      const permissions = getUserRowPermissions(currentUser, user);
      const can = permissions.canEdit;

      if (!can) return null;

      const isSelected = selectedUserIds.has(user.id);

      return (
        <Link
          href={!isSelected ? `/dashboard/users/edit/${user.id}` : '#'}
          variant={!isSelected ? 'button' : 'muted'}
          size="sm"
          radius="sm"
        >
          Edit
        </Link>
      );
    },
  },
];
