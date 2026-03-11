'use client';

import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Label } from '@/components/ui';
import { createUserFormSchema } from '../_domain/user-form.schema';
import { UserFormMode, UserFormValues } from '../_domain/user-form.schema';
import { APP_ROLES, USER_STATUS, THEME } from '@/types/enums';
import { InputField } from '@/types/form';
import { ErrorMessage } from './ErrorMessage';

export type UserFormProps = {
  mode: UserFormMode;
  defaultValues?: Partial<UserFormValues>;
  onSubmit: (value: UserFormValues) => Promise<void>;
};

export const getInputFields = (mode: UserFormMode): InputField[] => [
  {
    name: 'name',
    label: 'Name',
    required: true,
  },
  {
    name: 'email',
    label: 'Email',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: mode === 'create',
  },
];

export function UserForm({ mode, defaultValues, onSubmit }: UserFormProps) {
  const schema = useMemo(() => createUserFormSchema(mode), [mode]);

  const form = useForm<UserFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: APP_ROLES[0],
      status: USER_STATUS[0],
      theme: THEME[0],
      ...defaultValues,
    },
  });

  const {
    // register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const fields = getInputFields(mode);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {fields.map((field) => {
        return (
          <div key={field.name}>
            <Label htmlFor={field.name} required={field.required}>
              {field.label}
            </Label>
            <Input
              id={field.name}
              type={field.type ?? 'text'}
              placeholder={field.label}
            />
          </div>
        );
      })}
    </form>
  );
}
