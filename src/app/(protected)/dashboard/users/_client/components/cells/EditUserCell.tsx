'use client';

import { useState } from 'react';
import { DashboardActionButton } from '@/app/(protected)/dashboard/components';
import { EditUserDialog } from '../EditUserDialog';
import { UserRow } from '@/app/(protected)/dashboard/users/_domain';

interface EditUserCellProps {
  user: UserRow;
  canEdit: boolean;
}

export function EditUserCell({ user, canEdit }: EditUserCellProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DashboardActionButton
        can={canEdit}
        size="sm"
        variant="default"
        onClick={() => setOpen(true)}
      >
        Edit
      </DashboardActionButton>

      {open && <EditUserDialog user={user} onClose={() => setOpen(false)} />}
    </>
  );
}
