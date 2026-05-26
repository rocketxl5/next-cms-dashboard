'use client';

import { Box, Dropdown } from '@/components/ui';
import { Layers } from 'lucide-react';

// import { useUserSelection } from '@/providers';
// import { UseBulkUserAction } from '../_hooks/useBulkUserAction';

// import { handleBulkAction } from '@/lib/domain';

import { BulkUserAction } from '../list/_domain';
import { useBulkUserAction } from '../_hooks';

type UsersActionProps = {
  allowedBulkActions: BulkUserAction[];
  hasSelection: boolean;
};

export function UsersBulkActions({
  allowedBulkActions,
  hasSelection,
}: UsersActionProps) {
  // const { isLoading, setIsLoading, selectedUserIds, clearSelection } =
  //   useUserSelection();

  // const [action, setAction] = useState<BulkUserActionKey | ''>('');

  // const handleSelect = async (actionKey: BulkUserActionKey) => {
  //   try {
  //     setIsLoading(true);
  //     setAction(actionKey);

  //     await handleBulkAction(actionKey, selectedUserIds, clearSelection);
  //   } finally {
  //     setAction('');
  //     setIsLoading(false);
  //   }
  // };

  const { currentAction, handleSelect, loading } = useBulkUserAction();

  return (
    <Dropdown.Root>
      <Box position="relative">
        <Dropdown.Trigger
          variant="contrast"
          disabled={!hasSelection || loading}
          aria-label="Bulk actions"
        >
          <span className="flex items-center gap-2">
            <Layers size={20} />
            {loading && currentAction && (
              <span className="text-xs">
                {allowedBulkActions.find((a) => a.key === currentAction)?.label}
              </span>
            )}
          </span>
        </Dropdown.Trigger>
        <Dropdown.Content align="start">
          <Dropdown.Selector>
            {allowedBulkActions.map((action) => (
              <Dropdown.Item
                key={action.key}
                className="border-none"
                variant={
                  action.label === 'Delete'
                    ? 'destructive'
                    : action.label === 'Suspend'
                      ? 'warning'
                      : 'success'
                }
                onSelect={() => handleSelect(action.key)}
              >
                {action.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Selector>
        </Dropdown.Content>
      </Box>
    </Dropdown.Root>
  );
}
