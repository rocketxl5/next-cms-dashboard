'use client';

import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="text-sm text-gray-600">
        {selectedUserIds.size} selected
      </div>

      <ControlDropdownButton
        allowedBulkActions={allowedBulkActions}
        hasSelection={selectedCount > 0}
      />

      <button
        className="bg-blue-600 mt-2 w-48 text-white px-4 py-2 rounded"
        onClick={() => router.push('/dashboard/users/create')}
      >
        Create User
      </button>
    </div>
  );
}
