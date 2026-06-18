'use client';

import { Box, Button } from '@/components/ui';

import { BulkActionDropdown } from './BulkActionDropdown';

import { useConfirmBulkUserAction } from '../../_hooks';

import { UsersBulkActionContext } from '../../_domain';

export function UsersBulkAction({
  allowedBulkActions,
  hasSelection,
  selectedCount,
}: UsersBulkActionContext) {
  const { currentAction, handleSelect, loading } = useConfirmBulkUserAction();
  {
    /* Desktop */
  }
  <Box align="center" gap="sm">
    <p>{selectedCount} selected</p>

    {/* Desktop */}
    <Box className="hidden md:flex">
      {allowedBulkActions.map((action) => (
        <Button key={action.key} onClick={() => handleSelect(action.key)}>
          {action.label}
        </Button>
      ))}
    </Box>

    {/* Mobile */}
    <Box className="lg:hidden">
      <BulkActionDropdown
        allowedBulkActions={allowedBulkActions}
        hasSelection={hasSelection}
        selectedCount={selectedCount}
      />
    </Box>
  </Box>;
}
