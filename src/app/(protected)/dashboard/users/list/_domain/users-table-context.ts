import { AppRole } from '@/types/enums';
import { TableContext } from '@/types/ui';
import { UserRow } from './user-row';
import { CurrentDashboardUser } from '@/types/shared';
import { UserSelectionState } from './user-selection-state';

export type UsersTableContext = TableContext<UserRow> &
  UserSelectionState & {
    currentUser: CurrentDashboardUser;

    // header-level selection
    toggleAllUsers: () => void;
    isAllSelected: boolean;
    isIndeterminate: boolean;

    // domain logic
    handleUserRoleUpdate: (userId: string, role: AppRole) => void;
  };
