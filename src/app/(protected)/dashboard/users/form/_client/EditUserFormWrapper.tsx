'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { UserForm } from './UserForm';

import { editUserSchema, EditUserFormValues } from '@/lib/validators/users';

import { editUserAction } from '../_server/edit-user.action';

import { useAsyncFormSubmit } from '@/hooks/forms';

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
      successToast: {
        title: 'User updated',
        message: 'Changes saved successfully',
      },

      errorToast: {
        title: 'Update failed',
        message: 'Something went wrong',
      },
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