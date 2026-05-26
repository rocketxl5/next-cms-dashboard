'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { UserForm } from './UserForm';

import { useAsyncFormSubmit } from '@/hooks/forms';

import { USER_ACTIONS } from '@/lib/ui/toast';
import { editUserAction } from '../_server/edit-user.action';
import { editUserSchema, EditUserFormValues } from '@/lib/validators/users';

import { FormField } from '@/types/form';

interface EditUserProps {
  id: string;
  defaultValues: EditUserFormValues;
  fields: FormField[];
}

export function EditUserFormWrapper({
  id,
  defaultValues,
  fields,
}: EditUserProps) {
  const router = useRouter();
  const toasts = USER_ACTIONS.create;

  const form = useForm<EditUserFormValues>({
    resolver: zodResolver(editUserSchema),
    defaultValues,
  });

  const { onSubmit, loading } = useAsyncFormSubmit(
    form,
    async (values) => {
      await editUserAction(id, values);
    },
    {
      successToast: toasts.successToast,
      errorToast: toasts.errorToast,

      onSuccess: () => {
        router.push('/dashboard/users');
      },
    },
  );

  return (
    <UserForm<EditUserFormValues>
      form={form}
      fields={fields}
      loading={loading}
      onSubmit={onSubmit}
      type="edit"
    />
  );
}
