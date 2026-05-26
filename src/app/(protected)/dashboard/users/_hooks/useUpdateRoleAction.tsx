'use client';

import { useRouter } from 'next/navigation';

import { useAsyncAction } from '@/hooks/useAsyncAction';

import { USER_ACTIONS } from '@/lib/ui/toast';
import { updateUserRoleAction } from '@/lib/domain/users';

import { AppRole } from '@/types/enums';

export function useUpdateRoleAction() {
  const router = useRouter();
  const toasts = USER_ACTIONS.role;

  return useAsyncAction(
    async (userId: string, role: AppRole) => {
      await updateUserRoleAction(userId, role);

      router.refresh();
    },
    {
      successToast: toasts.successToast,
      errorToast: toasts.errorToast,
    },
  );
}