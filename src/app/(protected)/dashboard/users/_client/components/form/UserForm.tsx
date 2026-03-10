'use client';

import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Label } from '@/components/ui';
import { createUserFormSchema } from './user-form.schema';
import { UserFormProps, UserFormValues } from '@/types/form';
import { APP_ROLES, USER_STATUS, THEME } from '@/types/enums';
import { getInputFields } from '@/lib/form/auth-fields';

export function UserForm({ mode, defaultValues }: UserFormProps) {
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
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="flex flex-col gap-4"
    >
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
