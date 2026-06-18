'use client';

import { useRouter } from 'next/navigation';

import { useAsyncAction } from '@/hooks';
import { deleteUserAction } from '../_lib';

import { USER_ACTION_TOASTS } from '@/lib/ui/toast';

import { AppRole } from '@/types/enums';

export function useDeleteUserAction() {
  const router = useRouter();
  const toasts = USER_ACTION_TOASTS.delete;

  return useAsyncAction(
    async (userId: string, userRole: AppRole) => {
      await deleteUserAction(userId, userRole);

      router.refresh();
    },
    {
      successToast: toasts.successToast,
      errorToast: toasts.errorToast,
    },
  );
}
