import { UserRow, UsersColumn } from '@/app/(protected)/dashboard/users/_domain';
import { RoleBadge, StatusBadge } from '../components';
import { Checkbox } from '@/components/ui/Checkbox';
import { canActOnUser } from '@/lib/permissions/authority';
import { CurrentDashboardUser } from '@/types/shared';
// import { userActions } from '@/lib/permissions/dashboard';

export const buildUsersColumns = (
  selectedUserIds: Set<string>,
  toggleUserSelection: (id: string) => void,
): UsersColumn<UserRow>[] => [
  {
    key: 'checkbox',
    header: '',
    render: (user, currentUser) => {
      if (!canActOnUser(currentUser.role, user.role)) return null;

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
    render: (user) => <RoleBadge role={user.role} />,
  },
  {
    key: 'status',
    header: 'Status',
    render: (user) => <StatusBadge status={user.status} />,
  },
];
