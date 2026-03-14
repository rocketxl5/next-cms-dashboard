'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { UserForm } from './UserForm';

import { editUserSchema, UpdateUserValues } from '../_domain/user-form.schema';
import { editUserAction } from '../_server/edit-user.action';
import { FormField } from '@/types/form';

interface EditUserProps {
  id: string;
  defaultValues: UpdateUserValues;
  fields: FormField[];
}

export function EditUserFormWrapper({
  id,
  defaultValues,
  fields,
}: EditUserProps) {
  const form = useForm<UpdateUserValues>({
    resolver: zodResolver(editUserSchema),
    defaultValues,
  });

const onSubmit = async (values: UpdateUserValues) => {
  await editUserAction(id, values);
};

  return (
    <UserForm<UpdateUserValues>
      form={form}
      onSubmit={onSubmit}
      fields={fields}
    />
  );
}
