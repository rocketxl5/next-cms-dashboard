'use client';

import { useState } from 'react';

import { ConfirmDialog } from '@/components/ui/ConfirmDialog';

import { useDialog } from '@/providers/hooks';

import { ACTION_STRATEGIES, BULK_ACTION_CONTENT } from '@/lib/actions';

import { BulkUserActionKey } from '../list/_domain';

import { useBulkUserAction } from './useBulkUserAction';

export function useConfirmBulkUserAction() {
  const { openDialog } = useDialog();

  const bulkAction = useBulkUserAction();

  const [currentAction, setCurrentAction] = useState<BulkUserActionKey | ''>(
    '',
  );

  const handleSelect = async (actionKey: BulkUserActionKey) => {
    const content = BULK_ACTION_CONTENT.user[actionKey];
    const strategy = ACTION_STRATEGIES[actionKey];

    const confirmed = await openDialog<boolean>({
      render: ({ close, dismiss }) => (
        <ConfirmDialog
          {...content}
          variant={strategy.tone}
          onConfirm={() => close(true)}
          onCancel={dismiss}
        />
      ),
    });

    if (!confirmed) return;

    try {
      setCurrentAction(actionKey);

      await bulkAction.execute(actionKey);
    } finally {
      setCurrentAction('');
    }
  };

  return {
    currentAction,
    handleSelect,
    loading: bulkAction.loading,
  };
}
