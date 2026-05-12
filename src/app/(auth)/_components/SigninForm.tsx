'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormGroup } from '@/components/ui/form';
import { Button, Form, Input, Link } from '@/components/ui/';

import { useAuthSubmit } from '../_hook/useAuthSubmit';
import { signinFormSchema, SigninFormData } from '../_schema';

import { SessionUser } from '@/types/shared';

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
      <h1 className="text-xl text-center font-semibold">Sign in</h1>
      <FormGroup label="Email" htmlFor="email" error={errors.email?.message}>
        <Input id="email" placeholder="Email" {...register('email')} />
      </FormGroup>
      <FormGroup
        label="Password"
        htmlFor="password"
        error={errors.password?.message}
        labelAside={
          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:underline h-0 p-0"
          >
            Forgot password?
          </Link>
        }
      >
        <Input
          id="password"
          placeholder="Password"
          type="password"
          {...register('password')}
        />
      </FormGroup>
      <Button type="submit" variant="success" height="lg" textSize="base">
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </Button>
    </Form.Root>
  );
}
