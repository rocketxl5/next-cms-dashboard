'use client';

import { Box, Dropdown } from '@/components/ui';
import { Layers } from 'lucide-react';

import { BulkUserAction } from '../../list/_domain';
import { useConfirmBulkUserAction } from '../../_hooks';

type UsersActionProps = {
  allowedBulkActions: BulkUserAction[];
  hasSelection: boolean;
};

export function UsersBulkActions({
  allowedBulkActions,
  hasSelection,
}: UsersActionProps) {
  const { currentAction, handleSelect, loading } = useConfirmBulkUserAction();

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
