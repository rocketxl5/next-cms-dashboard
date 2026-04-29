'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { apiFetch } from '@/lib/api/api-fetch';
import { signinFormSchema, SigninFormData } from './signin-form.schema';
import { submitForm } from '@/lib/form/submit-form';

import { Button, Input } from '@/components/ui';
import { ErrorMessage } from '@/components/ui/button/auth/ErrorMessage';
import { SessionUser } from '@/types/shared';

type SigninFormProps = {
  onSuccess?: (user: SessionUser) => void;
};

export function SigninForm({ onSuccess }: SigninFormProps) {
  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: SigninFormData) {
    await submitForm({
      data,
      action: async () => {
        const result = await apiFetch('/api/auth/signin', {
          method: 'POST',
          body: data,
        });

        return result.user;
      },
      onSuccess,
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-20 max-w-sm space-y-6 rounded border p-6"
    >
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
