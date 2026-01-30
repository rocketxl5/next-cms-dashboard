'use client';

import { BaseProps } from './base-props';
import { DashboardActionButton } from '../../../components';
import { deleteUserAction } from '../../_actions/deleteUserAction';


interface DeleteUserCellProps extends BaseProps {
  canDelete: boolean
}

export function DeleteUserCell({ userId, canDelete }: DeleteUserCellProps) {
  return (
    <DashboardActionButton
      can={canDelete}
      variant="destructive"
      onClick={() => deleteUserAction(userId)}
    >
      Delete
    </DashboardActionButton>
  );
}
