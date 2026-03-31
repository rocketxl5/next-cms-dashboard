'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { UserForm } from './UserForm';

import { editUserSchema, UpdateUserValues } from '../_domain/user-form.schema';
import { editUserAction } from '../_server/edit-user.action';

import { useToast } from '@/providers';

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
  const { addToast } = useToast();

  const onSubmit = async (values: UpdateUserValues) => {
    try {
      await editUserAction(id, values);

      addToast({
        title: 'User updated',
        message: 'Changes saved successfully',
        variant: 'default',
        duration: 3000,
      });
    } catch (error) {
      addToast({
        title: 'Update failed',
        message: 'Something went wrong',
        variant: 'destructive',
        duration: 3000,
      });
    }
  };

  return (
    <UserForm<UpdateUserValues>
      form={form}
      onSubmit={onSubmit}
      fields={fields}
    />
  );
}
