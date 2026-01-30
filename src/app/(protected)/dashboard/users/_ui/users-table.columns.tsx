import { DashboardUserRow, UsersColumn } from '../_domain';
import { DashboardRole } from '@/types/server';
import {
  RoleBadge,
  StatusBadge,
  DeleteUserCell,
  EditUserCell,
} from '../_components';
import { canDeleteUser, canActOnUser, canEditUser } from '@/lib/permissions';

export const usersColumns: UsersColumn<DashboardUserRow>[] = [
  {
    key: 'email',
    header: 'Email',
    render: (user) => user.email,
  },
  {
    key: 'name',
    header: 'Name',
    render: (user) => user.name,
  },
  {
    key: 'role',
    header: 'Role',
    render: (user) => <RoleBadge role={user.role} />,
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
      const canDelete =
        canDeleteUser(currentUser.role) &&
        canActOnUser(currentUser.role, user.role);

      const canEdit =
        canEditUser(currentUser.role) && // your permission helper
        canActOnUser(currentUser.role, user.role);

      return (
        <div className="flex gap-4">
          <DeleteUserCell userId={user.id} canDelete={canDelete} />
          <EditUserCell
            userId={user.id}
            canEdit={canEdit}
            currentRole={user.role as DashboardRole}
          />
        </div>
      );
    },
  },
];
