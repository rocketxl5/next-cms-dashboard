'use client';

import { useState } from 'react';

import { useAsyncAction } from '@/hooks/useAsyncAction';

import { useUserSelection } from '@/providers';

import { handleBulkAction } from '@/lib/domain';

import { BulkUserActionKey } from '../list/_domain';

export function useBulkUserAction() {
  const { selectedUserIds, clearSelection } = useUserSelection();

  const [action, setAction] = useState<BulkUserActionKey | ''>('');

  const bulkAction = useAsyncAction(
    async (actionKey: BulkUserActionKey) => {
      setAction(actionKey);

      await handleBulkAction(actionKey, selectedUserIds, clearSelection);
    },
    {
      onSuccess: () => {
        setAction('');
      },

      onError: () => {
        setAction('');
      },

      successToast: {
        title: 'Bulk action completed',
        message: 'Selected users updated successfully',
      },

      errorToast: {
        title: 'Bulk action failed',
        message: 'Could not update users',
      },
    },
  );

  return {
    currentAction: action,
    handleSelect: bulkAction.execute,
    loading: bulkAction.loading,
  };
}
