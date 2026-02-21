'use client';

import { UsersTable } from './UsersTable';
import { useUserSelection } from '@/hooks/useUserSelection';
import { CurrentDashboardUser } from '@/types/shared';
import { UserRow } from '../../_domain';

type UsersDashboardClientProps = {
  users: UserRow[];
  currentUser: CurrentDashboardUser;
};

export function UserDashboardClient({
  users,
  currentUser,
}: UsersDashboardClientProps) {
  const { selectedUserIds, toggleUserSelection } = useUserSelection();

  return (
    <UsersTable
      users={users}
      currentUser={currentUser}
      selectedUserIds={selectedUserIds}
      toggleUserSelection={toggleUserSelection}
    />
  );
}
