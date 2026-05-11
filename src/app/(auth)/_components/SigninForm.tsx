'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Form, Input } from '@/components/ui/';

import { useAuthSubmit } from '../_hook/useAuthSubmit';
import {
  signinFormSchema,
  SigninFormData,
} from '../_schema/signin-form-schema';

import { SessionUser } from '@/types/shared';
import { FormGroup } from '@/components/ui/form';

type SigninFormProps = {
  onSuccess?: (user: SessionUser) => void;
};

export function SigninForm({ onSuccess }: SigninFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = useAuthSubmit<SigninFormData>({
    endpoint: '/api/auth/signin',
    onSuccess,
    setError,
  });

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.ErrorMessage message={errors.root?.message} />
      <h1 className="text-xl font-semibold">Sign in</h1>
      <FormGroup label="Email" htmlFor="email" error={errors.email?.message}>
        <Input
          id="email"
          placeholder="Email"
          {...register('email')}
          layout="block"
        />
      </FormGroup>
      <FormGroup
        label="Password"
        htmlFor="password"
        error={errors.password?.message}
      >
        <Input
          id="password"
          placeholder="Password"
          type="password"
          {...register('password')}
        />
      </FormGroup>
      <Button type="submit" variant="default" height="md" textSize="sm">
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </Button>
    </Form.Root>
  );
}
