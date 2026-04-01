'use client';

import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/button/auth/ErrorMessage';
import { Button, Input, Label, Select } from '@/components/ui';
import { Spinner } from '@/components/ui/Spinner';

import { normalizeDisplayString } from '@/lib/utils/normalizers';

import { FormField } from '@/types/form';

interface UserFormProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  fields: FormField[];
  onSubmit: React.SubmitEventHandler<HTMLFormElement>;
  loading: boolean;
}

export function UserForm<T extends FieldValues>({
  form,
  fields,
  onSubmit,
  loading,
}: UserFormProps<T>) {
  const {
    register,
    formState: { errors, isDirty },
  } = form;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {fields.map((field) => {
        const fieldName = field.name as Path<T>;
        return (
          <div key={fieldName}>
            <ErrorMessage message={errors[field.name]?.message as string} />
            <Label htmlFor={String(field.name)}>{field.label}</Label>
            {field.type === 'select' && field.options ? (
              <Select {...register(fieldName)}>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {normalizeDisplayString(option.value)}
                  </option>
                ))}
              </Select>
            ) : (
              <Input
                id={fieldName}
                type={field.type ?? 'text'}
                {...register(fieldName)}
              />
            )}
          </div>
        );
      })}
      <Button type="submit" variant="success" disabled={loading || !isDirty}>
        {loading ? (
          <>
            <Spinner size="sm" className="mr-2" />
          </>
        ) : (
          'Submit'
        )}
      </Button>
    </form>
  );
}
