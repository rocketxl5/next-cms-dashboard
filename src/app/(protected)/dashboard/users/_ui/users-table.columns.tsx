import { DashboardUserRow, UsersColumn } from '../_domain';
import { RoleBadge, StatusBadge, DeleteUserCell } from '../_components';
import { canDeleteUser } from '@/lib/permissions';

export const usersColumns: UsersColumn<DashboardUserRow>[] = [
  {
    key: 'email',
    header: 'Email',
    render: (user) => user.email,
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
      const canDelete = canDeleteUser(currentUser.role);

      return <DeleteUserCell userId={user.id} canDelete={canDelete} />;
    },
  },
];
