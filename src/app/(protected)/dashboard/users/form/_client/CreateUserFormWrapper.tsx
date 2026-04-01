'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { UserForm } from './UserForm';

import {
  createUserSchema,
  CreateUserValues,
} from '../_domain/user-form.schema';
import { createUserAction } from '../_server/create-user.action';

import { useAsyncFormSubmit } from '@/hooks/useAsyncFormSubmit';

import { FormField } from '@/types/form';

interface CreateUserProps {
  defaultValues: CreateUserValues;
  fields: FormField[];
}

export function CreateUserFormWrapper({
  defaultValues,
  fields,
}: CreateUserProps) {
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
      successToast: {
        title: 'User created',
        message: 'Changes saved successfully',
      },
      errorToast: {
        title: 'Update failed',
        message: 'Something went wrong',
      },
    },
  );

  return (
    <UserForm<CreateUserValues>
      form={form}
      onSubmit={onSubmit}
      fields={fields}
      loading={loading}
    />
  );
}
