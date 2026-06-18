'use client';

import { Box, Button, Spinner } from '@/components/ui';

import { BulkActionDropdown } from './BulkActionDropdown';

import { useConfirmBulkUserAction } from '../../_hooks';

import { UsersBulkActionContext } from '../../_domain';

export function UsersBulkAction({
  allowedBulkActions,
  hasSelection,
  selectedCount,
}: UsersBulkActionContext) {
  const { currentAction, handleSelect, loading } = useConfirmBulkUserAction();
  console.log(currentAction);

  return (
    <Box align="center" justify="start" gap="sm" width="full">
      {/* Desktop */}
      <Box className="hidden md:flex">
        {allowedBulkActions.map((action) => (
          <Button
            key={action.key}
            textWeight="normal"
            width="control"
            variant={
              action.label === 'Delete'
                ? 'destructive'
                : action.label === 'Suspend'
                  ? 'warning'
                  : 'success'
            }
            onClick={() => handleSelect(action.key)}
          >
            <Box>
              {loading && currentAction === action.label.toLocaleLowerCase() ? (
                <Spinner size={18} />
              ) : (
                action.label
              )}
            </Box>
          </Button>
        ))}
      </Box>

      {/* Mobile */}
      <Box className="md:hidden">
        <BulkActionDropdown
          allowedBulkActions={allowedBulkActions}
          hasSelection={hasSelection}
          selectedCount={selectedCount}
        />
      </Box>
    </Box>
  );
}
