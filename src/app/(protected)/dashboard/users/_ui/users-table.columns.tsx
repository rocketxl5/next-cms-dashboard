import { UserRow, UsersColumn } from '../_domain';
import {
  RoleBadge,
  StatusBadge,
  DeleteUserCell,
  EditUserCell,
} from '../_components';
import { selectedUserIds, toggleUserSelection } from '../_helpers';
import { Checkbox } from '@/components/ui/Checkbox';
import { userActions } from '@/lib/permissions/dashboard';

export const usersColumns: UsersColumn<UserRow>[] = [
  {
    key: 'checkbox',
    header: '',
    render: (user) => <Checkbox checked={selectedUserIds.has(user.id)} />,
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
      const canDelete = userActions.canDeleteUser(currentUser.role, user.role);

      const canEdit = userActions.canEditUser(currentUser.role, user.role);

      return (
        <div className="flex gap-4">
          <DeleteUserCell userId={user.id} canDelete={canDelete} />
          <EditUserCell user={user} canEdit={canEdit} />
        </div>
      );
    },
  },
];
