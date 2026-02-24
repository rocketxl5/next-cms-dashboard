import { ControlDropdownButton } from './button/ControlDropdownButton';
import { BulkUserAction } from '../users/_domain';
import { useUserSelection } from '@/providers/UserSelectionProvider';

type BulkBarProps = {
  allowedBulkActions: BulkUserAction[];
  hasSelection: boolean;
};

export function BulkBar({ allowedBulkActions, hasSelection }: BulkBarProps) {
  const { selectedUserIds } = useUserSelection();

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="text-sm text-gray-600">
        {selectedUserIds.size} selected
      </div>

      <ControlDropdownButton
        allowedBulkActions={allowedBulkActions}
        hasSelection={hasSelection}
      />
    </div>
  );
}
