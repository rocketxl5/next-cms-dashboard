import {
  UserRow,
  UsersColumn,
} from '@/app/(protected)/dashboard/users/_domain';
import { RoleBadge, StatusBadge } from '../components';
import { Checkbox } from '@/components/ui';
import { userActions } from '@/lib/permissions/resources';
import { getUserRowPermissions } from '@/lib/permissions/resources';
import { APP_ROLES, AppRole } from '@/types/enums';
import {
  DashboardActionButton,
  RoleSelect,
} from '@/app/(protected)/dashboard/components';

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

      // if (!permissions.canUpdateRole || permissions.self)
      if (!permissions.canUpdateRole) return <RoleBadge role={user.role} />;

      const assignableRoles: AppRole[] = APP_ROLES.filter((role) =>
        userActions.canUpdateUserRole(currentUser.role, { targetRole: role }),
      );

      console.log(assignableRoles);

      return (
        <RoleSelect
          value={user.role}
          assignableRoles={assignableRoles}
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
        <div className="flex gap-4">
          <DashboardActionButton
            can={can}
            selected={isSelected}
            size="sm"
            variant="default"
            onClick={() => console.log('active')}
          >
            Edit
          </DashboardActionButton>
        </div>
      );
    },
  },
];
