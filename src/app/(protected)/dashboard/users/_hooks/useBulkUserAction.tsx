'use client';

import { useAsyncAction } from '@/hooks';
import { useUserSelection } from '@/providers';

import { handleBulkUsersAction } from '@/app/(protected)/dashboard/users/list/_bulkactionbar/_domain';
import { USER_ACTION_TOASTS } from '@/lib/ui/toast';

import { BulkUserActionKey } from '../list/_domain';

export function useBulkUserAction() {
  const { selectedUserIds, clearSelection } = useUserSelection();

  const bulkAction = useAsyncAction(
    async (actionKey: BulkUserActionKey) => {
      await handleBulkUsersAction(actionKey, selectedUserIds, clearSelection);
    },
    {
      successToast: (_, actionKey) =>
        USER_ACTION_TOASTS[actionKey].successToast,

      errorToast: (_, actionKey) => USER_ACTION_TOASTS[actionKey].errorToast,
    },
  );

  return {
    execute: bulkAction.execute,
    loading: bulkAction.loading,
  };
}