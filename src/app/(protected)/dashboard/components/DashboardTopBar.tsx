'use client';

import { ControlDropdownButton } from './button/ControlDropdownButton';
import { BulkUserAction } from '../users/list/_domain';
import { useUserSelection } from '@/providers/UserSelectionProvider';
import { Link } from '@/components/ui';

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
    <div className="flex items-center justify-between mb-4">
      <div className="text-sm text-gray-600">
        {selectedUserIds.size} selected
      </div>

      <ControlDropdownButton
        allowedBulkActions={allowedBulkActions}
        hasSelection={selectedCount > 0}
      />
      <Link
        href="/dashboard/users/create"
        variant="button"
        size="lg"
        radius="sm"
      >
        Create User
      </Link>
    </div>
  );
}
