import { UsersColumn } from '../_domain/users-column';
import { DashboardUserRow } from '../_domain';
import { StatusBadge } from '../_components/StatusBadge';
import { RoleBadge } from '../_components/RoleBadge';

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
];
