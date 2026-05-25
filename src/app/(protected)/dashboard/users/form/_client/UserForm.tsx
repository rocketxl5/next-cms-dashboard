'use client';

import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

import {
  Box,
  Button,
  Form,
  Input,
  Label,
  Select,
  Spinner,
  Title,
  GoBackBtn,
} from '@/components/ui';

import { description } from '@/lib/form';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

import { FormField } from '@/types/form';

interface UserFormProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  fields: FormField[];
  onSubmit: React.SubmitEventHandler<HTMLFormElement>;
  type: string;
  loading: boolean;
}

export function UserForm<T extends FieldValues>({
  form,
  fields,
  onSubmit,
  type,
  loading,
}: UserFormProps<T>) {
  const {
    register,
    formState: { errors, isDirty },
  } = form;

  return (
    <Box width="lg" className="mx-auto" position="relative">
      <GoBackBtn className="absolute -bottom-16 font-semibold text-lg" />
      <Form.Root onSubmit={onSubmit}>
        <Form.Header>
          <Title as="h1" size="2xl" weight="bold" align="center">
            {type === 'create' ? 'Create user' : 'Edit user'}
          </Title>
        </Form.Header>
        {fields.map((field) => {
          const fieldName = field.name as Path<T>;
          return (
            <Form.Group
              key={fieldName}
              description={
                fieldName === 'password' || fieldName === 'name'
                  ? description[String(fieldName)]
                  : null
              }
            >
              <Form.ErrorMessage
                message={errors[field.name]?.message as string}
              />
              <Label htmlFor={String(field.name)}>{field.label}</Label>
              {field.type === 'select' && field.options ? (
                <Select {...register(fieldName)} height="lg">
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
            </Form.Group>
          );
        })}
        <Button
          type="submit"
          variant="success"
          layout="block"
          height="lg"
          textSize="base"
          className="mt-4 font-semibold"
          disabled={loading || !isDirty}
        >
          {loading ? (
            <>
              <Spinner size={24} />
            </>
          ) : (
            'Submit'
          )}
        </Button>
      </Form.Root>
    </Box>
  );
}
