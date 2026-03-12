'use client';

import { useForm, FieldValues, DefaultValues, Path } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType } from 'zod';

import { Input, Label, Select } from '@/components/ui';
import { ErrorMessage } from '@/components/ui/button/auth/ErrorMessage';
import { InputField } from '@/types/form';

type FormField<T> = {
  name: keyof T;
  label: string;
  type?: 'text' | 'email' | 'password' | 'select'; // new "select" type
  required?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: { label: string; value: any }[]; // only used if type === 'select'
};

interface UserFormProps<T extends FieldValues> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: ZodType<T, any>; // T = output type, any for input
  defaultValues?: DefaultValues<T>;
  onSubmit: (values: T) => Promise<void>;
  fields: FormField<T>[];
}

export function UserForm<T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  fields,
}: UserFormProps<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

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
                  <option key={option.label} value={option.value}>
                    {option.value}
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
      <button type="submit">Submit</button>
    </form>
  );
}
