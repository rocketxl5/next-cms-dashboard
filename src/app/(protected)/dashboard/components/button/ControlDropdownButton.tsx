import { BulkUserAction, BulkUserActionKey } from '../../users/_domain';
import { handleBulkAction } from '@/lib/dashboard';
import { useUserSelection } from '@/providers';

export type ControlDropdownButtonProps = {
  allowedBulkActions: BulkUserAction[];
  hasSelection: boolean;
};
export function ControlDropdownButton({
  hasSelection,
  allowedBulkActions,
}: ControlDropdownButtonProps) {
  const { isDropdownOpen, setIsDropdownOpen, selectedUserIds, clearSelection } =
    useUserSelection();

  const handleClick = (actionKey: BulkUserActionKey) => {
    handleBulkAction(actionKey, selectedUserIds, clearSelection);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        disabled={!hasSelection}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`px-3 py-2 rounded border ${
          hasSelection
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        Select Action
      </button>

      {isDropdownOpen && hasSelection && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow md z-10">
          {allowedBulkActions.length > 0 ? (
            allowedBulkActions.map((action) => (
              <button
                key={action.key}
                onClick={() => handleClick(action.key)}
                className="block w-full text-left text-black px-3 py-2 hover:bg-gray-100 text-sm"
              >
                {action.label}
              </button>
            ))
          ) : (
            <div className="px-3 py-2 text-sm text-gray-500">
              No available actions
            </div>
          )}
        </div>
      )}
    </div>
  );
}
