'use client';

import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { UserDialogContext } from '@/components/ui/dialog';

import { useDialog } from '@/providers/hooks';
import { useDeleteUserAction } from './useDeleteUserAction';
import { ACTION_STRATEGIES, ACTION_CONTENT } from '@/lib/actions';

import { UserRow } from '../_domain';

export function useConfirmDeleteUser() {
  const { openDialog } = useDialog();

  const deleteUser = useDeleteUserAction();
  const content = ACTION_CONTENT.user.delete;
  const strategy = ACTION_STRATEGIES.delete;

  return async (user: UserRow) => {
    const confirmed = await openDialog<boolean>({
      render: ({ close, dismiss }) => (
        <ConfirmDialog
          {...content}
          context={<UserDialogContext user={user} />}
          variant={strategy.tone}
          onConfirm={() => close(true)}
          onCancel={dismiss}
        />
      ),
    });

    if (!confirmed) return;

    await deleteUser.execute(user.id, user.role);
  };
}