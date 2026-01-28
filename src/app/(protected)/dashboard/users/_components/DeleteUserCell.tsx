'use client';

import { DashboardActionButton } from '../../components';
import { deleteUserAction } from '../_actions/deleteUserAction';

type Props = {
  userId: string;
  canDelete: boolean;
};

export function DeleteUserCell({ userId, canDelete }: Props) {
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
