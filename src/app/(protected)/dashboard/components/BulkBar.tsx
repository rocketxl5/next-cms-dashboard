import { ControlDropdownButton } from './button/ControlDropdownButton';
import { BulkUserAction } from '../users/_domain';

type BulkBarProps = {
  allowedBulkActions: BulkUserAction[];
  selectedUserIds: Set<string>;
  hasSelection: boolean;
};

export function BulkBar({
  allowedBulkActions,
  selectedUserIds,
  hasSelection,
}: BulkBarProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="text-sm text-gray-600">
        {selectedUserIds.size} selected
      </div>

      <ControlDropdownButton
        allowedBulkActions={allowedBulkActions}
        hasSelection={hasSelection}
        selectedUserIds={selectedUserIds}
      />
    </div>
  );
}
