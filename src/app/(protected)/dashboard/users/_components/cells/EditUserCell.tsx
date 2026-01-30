'use client';

import { useState } from 'react';
import { BaseProps } from './base-props';
import { DashboardRole } from '@/types/server';
import { DashboardActionButton } from '../../../components';
import { editUserAction } from '../../_actions/editUserAction';

interface EditUserCellProps extends BaseProps {
  canEdit: boolean;
  currentRole: DashboardRole;
}

export function EditUserCell({ userId, canEdit, currentRole}: EditUserCellProps) {
  const [loading, setLoading] = useState(false);

  const handleEdit = async () => {
    try {
      // simple inline prompt to get new name
      const newName = prompt('Enter new name for the user:');
      if (!newName) return; // cancel pressed or empty

      setLoading(true);

      // Example: quick role toggle
      await editUserAction({
        id: userId,
        name: newName,
      });

      alert('User updated successfully!');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      alert(
        'Error trying updating user: ' + (error.message || 'Unknown error'),
      );
    } finally {
        setLoading(false);
    }
  };

  return (
    <DashboardActionButton can={canEdit} onClick={handleEdit} variant="default">
      {loading ? 'Updating…' : 'Edit'}
    </DashboardActionButton>
  );
}
