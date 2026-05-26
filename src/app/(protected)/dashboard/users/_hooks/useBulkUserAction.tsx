'use client';

import { useState } from 'react';

import { useAsyncAction } from '@/hooks/useAsyncAction';

import { useUserSelection } from '@/providers';

import { handleBulkAction } from '@/lib/domain';

import { BulkUserActionKey } from '../list/_domain';

import { USER_ACTIONS } from '@/lib/ui/toast/user-actions';

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

      successToast: (_, actionKey) => USER_ACTIONS[actionKey].successToast,

      errorToast: (_, actionKey) => USER_ACTIONS[actionKey].errorToast,
    },
  );

  return {
    currentAction: action,
    handleSelect: bulkAction.execute,
    loading: bulkAction.loading,
  };
}
