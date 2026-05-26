'use client';

import { useRouter } from "next/navigation";

import { useAsyncAction } from "@/hooks/useAsyncAction";

import { updateUserRoleAction } from "@/lib/domain/users";

import { AppRole } from "@/types/enums";

export function useUpdateRoleAction() {
    const router = useRouter();

    return useAsyncAction(
        async (userId: string, role: AppRole) => {
            await updateUserRoleAction(userId, role);

            router.refresh();
        },
          {
      successToast: {
        title: 'Role updated',
        message: 'User role updated successfully',
      },
      errorToast: {
        title: 'Update failed',
        message: 'Could not update user role',
      },
    },
    )
}