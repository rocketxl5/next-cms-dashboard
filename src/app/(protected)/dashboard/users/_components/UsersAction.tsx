'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Box, Link } from '@/components/ui';
import { Select } from '@/components/ui';

import { useUserSelection } from '@/providers';
import { handleBulkAction } from '@/lib/domain';
import { BulkUserAction, BulkUserActionKey } from '../list/_domain';

type UsersActionProps = {
  allowedBulkActions: BulkUserAction[];
  hasSelection: boolean;
};

export function UsersAction({
  allowedBulkActions,
  hasSelection,
}: UsersActionProps) {
  const { isLoading, setIsLoading, selectedUserIds, clearSelection } =
    useUserSelection();
  //   const router = useRouter();
  const [action, setAction] = useState(''); 

  const handleChange = async (actionKey: BulkUserActionKey) => {
    try {
      setIsLoading(true);
      setAction(actionKey);
      await handleBulkAction(actionKey, selectedUserIds, clearSelection);
      setAction('');
    } finally {
      setIsLoading(false);
    }
  };

  console.log(hasSelection);

  return (
    <Box className="flex w-sm gap-4">
      {/* <SearchSelect /> */}
      <Link href="/dashboard/users/create" variant="button" radius="sm">
        Create User
      </Link>
      <Select
        value={!isLoading ? '' : action}
        disabled={!hasSelection}
        onChange={(e) => handleChange(e.target.value as BulkUserActionKey)}
      >
        <option value="" disabled>
          Action
        </option>
        {allowedBulkActions.length > 0 &&
          allowedBulkActions.map((action) => (
            <option key={action.key} value={action.key}>
              {action.label}
            </option>
          ))}
      </Select>
    </Box>
  );
}
