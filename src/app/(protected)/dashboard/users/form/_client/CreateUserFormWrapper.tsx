'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { UserForm } from './UserForm';

import {
  createUserSchema,
  CreateUserValues,
} from '../_domain/user-form.schema';
import { createUserAction } from '../_server/create-user.action';
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

  const onSubmit = async (values: CreateUserValues) => {
  await createUserAction(values);
};


  return (
    <UserForm<CreateUserValues>
      form={form}
      onSubmit={onSubmit}
      fields={fields}
    />
  );
}
