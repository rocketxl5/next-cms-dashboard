'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { UserForm } from './UserForm';

import { USER_ACTIONS } from '@/lib/ui/toast';
import { useAsyncFormSubmit } from '@/hooks/forms';
import { createUserAction } from '../_server/create-user.action';
import { createUserSchema, CreateUserValues } from '@/lib/validators/users';

import { FormField } from '@/types/form';

interface CreateUserProps {
  defaultValues: CreateUserValues;
  fields: FormField[];
}

export function CreateUserFormWrapper({
  defaultValues,
  fields,
}: CreateUserProps) {
  const router = useRouter();
  const toasts = USER_ACTIONS.create;

  const form = useForm<CreateUserValues>({
    resolver: zodResolver(createUserSchema),
    defaultValues,
  });

  const { onSubmit, loading } = useAsyncFormSubmit(
    form,
    async (values: CreateUserValues) => {
      await createUserAction(values);
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
    <UserForm<CreateUserValues>
      form={form}
      onSubmit={onSubmit}
      fields={fields}
      loading={loading}
      type="create"
    />
  );
}
