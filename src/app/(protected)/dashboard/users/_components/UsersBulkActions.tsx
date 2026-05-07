'use client';

import { useState } from 'react';

import { Box, Dropdown } from '@/components/ui';
import { Layers } from 'lucide-react';

import { useUserSelection } from '@/providers';

import { handleBulkAction } from '@/lib/domain';

import { BulkUserAction, BulkUserActionKey } from '../list/_domain';

type UsersActionProps = {
  allowedBulkActions: BulkUserAction[];
  hasSelection: boolean;
};

export function UsersBulkActions({
  allowedBulkActions,
  hasSelection,
}: UsersActionProps) {
  const { isLoading, setIsLoading, selectedUserIds, clearSelection } =
    useUserSelection();

  const [action, setAction] = useState<BulkUserActionKey | ''>('');

  const handleSelect = async (actionKey: BulkUserActionKey) => {
    try {
      setIsLoading(true);
      setAction(actionKey);

      await handleBulkAction(actionKey, selectedUserIds, clearSelection);
    } finally {
      setAction('');
      setIsLoading(false);
    }
  };

  return (
    <Dropdown.Root>
      <Box position="relative">
        <Dropdown.Trigger
          disabled={!hasSelection || isLoading}
          aria-label="Bulk actions"
        >
          <span className="flex items-center gap-2">
            <Layers size={20} />
            {isLoading && action && (
              <span className="text-xs">
                {allowedBulkActions.find((a) => a.key === action)?.label}
              </span>
            )}
          </span>
        </Dropdown.Trigger>
        <Dropdown.Content align="start">
          <Dropdown.Selector>
            {allowedBulkActions.map((action) => (
              <Dropdown.Item
                key={action.key}
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
