'use client';

import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/button/auth/ErrorMessage';
import { Button, Input, Label, Select } from '@/components/ui';
import { Spinner } from '@/components/ui/Spinner';

import { normalizeDisplayString } from '@/lib/utils/normalizers';

import { FormField } from '@/types/form';

interface UserFormProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  onSubmit: (values: T) => Promise<void>;
  fields: FormField[];
}

export function UserForm<T extends FieldValues>({
  form,
  onSubmit,
  fields,
}: UserFormProps<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  console.log(isSubmitting);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
      <Button type="submit" variant="success" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner size="sm" className="mr-2" />
            Submitting...
          </>
        ) : (
          'Submit'
        )}
      </Button>
    </form>
  );
}
