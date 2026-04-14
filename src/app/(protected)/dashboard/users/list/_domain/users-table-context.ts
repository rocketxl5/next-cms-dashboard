import { AppRole } from '@/types/enums';
import { TableContext } from '@/types/ui';
import { UserRow } from './user-row';
import { CurrentDashboardUser } from '@/types/shared';

export type UsersTableContext = TableContext<UserRow> & {
  currentUser: CurrentDashboardUser;
  selectedUserIds: Set<string>;
  toggleUserSelection: (id: string) => void;
  handleUserRoleUpdate: (userId: string, role: AppRole) => void;
};
