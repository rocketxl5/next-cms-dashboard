'use client';

import { Box, Dropdown } from '@/components/ui';
import { Layers } from 'lucide-react';

import { useConfirmBulkUserAction } from '../../_hooks'

import { UsersBulkActionContext } from './_domain/bulk-user-action';

export function BulkActionDropdown({
  allowedBulkActions,
  hasSelection,
}: UsersBulkActionContext) {
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
