'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthSubmit } from '../_hook/useAuthSubmit';

import { signinFormSchema, SigninFormData } from '../_schema/signin-form-schema';

import { Button } from '@/components/ui';
import { ErrorMessage, Input } from '@/components/ui/form';
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-20 max-w-sm space-y-6 rounded border p-6"
    >
      <ErrorMessage message={errors.root?.message} />
      <h1 className="text-xl font-semibold">Sign in</h1>

      <div>
        <ErrorMessage message={errors.email?.message} />
        <Input placeholder="Email" {...register('email')} />
      </div>
      <div>
        <ErrorMessage message={errors.password?.message} />
        <Input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
      </div>

      <Button type="submit" variant="default" textSize="sm">
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </Button>
    </form>
  );
}
