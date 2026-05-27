'use client';

import { ConfirmDialog } from "@/components/ui/ConfirmDialog";

import { useDialog } from "@/providers/hooks";
import { useDeleteUserAction } from "./useDeleteUserAction";

import { UserRow } from "../list/_domain";

export function useConfirmDeleteUser() {
  const { openDialog } = useDialog();

  const deleteUser = useDeleteUserAction();

  return async (user: UserRow) => {
    const confirmed = await openDialog<boolean>({
      render: ({ close, dismiss }) => (
        <ConfirmDialog
          title="Delete user?"
          description="This action cannot be undone."
          variant="danger"
          confirmLabel="Delete"
          onConfirm={() => close(true)}
          onCancel={dismiss}
        />
      ),
    });

    if (!confirmed) return;

    await deleteUser.execute(user.id, user.role);
  };
}