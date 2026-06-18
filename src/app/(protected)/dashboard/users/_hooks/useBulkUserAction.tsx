'use client';

import { useAsyncAction } from '@/hooks';
import { useUserSelection } from '@/providers';
import { BulkUserActionKey } from '../_domain';
import { handleBulkUsersAction } from '../_lib/handle-bulk-users-action';
import { USER_ACTION_TOASTS } from '@/lib/ui/toast';

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