'use client';

import { Link } from '@/components/ui';
import { UsersSearch } from '../users/_components/UsersSearch';
import { ControlDropdownButton } from './button/ControlDropdownButton';

import { BulkUserAction } from '../users/list/_domain';
import { useUserSelection } from '@/providers/UserSelectionProvider';

type DashboardTopBarProps = {
  allowedBulkActions: BulkUserAction[];
  selectedCount: number;
};

export function DashboardTopBar({
  allowedBulkActions,
  selectedCount,
}: DashboardTopBarProps) {
  const { selectedUserIds } = useUserSelection();

  return (
    <div className="flex flex-col gap-2">
      <UsersSearch />
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-600">
          {selectedUserIds.size} selected
        </div>

        <ControlDropdownButton
          allowedBulkActions={allowedBulkActions}
          hasSelection={selectedCount > 0}
        />
      </div>
    </div>
  );
}
