'use client';

import { useState } from 'react';

import { useAsyncAction } from '@/hooks/useAsyncAction';

import { useUserSelection } from '@/providers';

import { handleBulkUsersAction } from '@/lib/domain/users';

import { BulkUserActionKey } from '../list/_domain';

import { USER_ACTION_TOASTS } from '@/lib/ui/toast';

export function useBulkUserAction() {
  const { selectedUserIds, clearSelection } = useUserSelection();

  const [action, setAction] = useState<BulkUserActionKey | ''>('');

  const bulkAction = useAsyncAction(
    async (actionKey: BulkUserActionKey) => {
      setAction(actionKey);

      await handleBulkUsersAction(actionKey, selectedUserIds, clearSelection);
    },
    {
      onSuccess: () => {
        setAction('');
      },

      onError: () => {
        setAction('');
      },

      successToast: (_, actionKey) =>
        USER_ACTION_TOASTS[actionKey].successToast,

      errorToast: (_, actionKey) => USER_ACTION_TOASTS[actionKey].errorToast,
    },
  );

  return {
    currentAction: action,
    handleSelect: bulkAction.execute,
    loading: bulkAction.loading,
  };
}
