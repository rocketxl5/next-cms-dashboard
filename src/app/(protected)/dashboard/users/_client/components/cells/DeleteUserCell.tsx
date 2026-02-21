'use client';

import { BaseProps } from '@/app/(protected)/dashboard/users/_domain';
import { DashboardActionButton } from '@/app/(protected)/dashboard/components';
import { deleteUserAction } from '@/app/(protected)/dashboard/users/_server/actions';


interface DeleteUserCellProps extends BaseProps {
  canDelete: boolean
}

export function DeleteUserCell({ userId, canDelete }: DeleteUserCellProps) {
  return (
    <DashboardActionButton
      can={canDelete}
      size="sm"
      variant="destructive"
      onClick={() => deleteUserAction(userId)}
    >
      Delete
    </DashboardActionButton>
  );
}
