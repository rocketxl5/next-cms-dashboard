'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { apiFetch } from '@/lib/api/api-fetch';
import { signupFormSchema, SignupFormData } from './signup-form.schema';

import { Button, Input } from '@/components/ui';
import { ErrorMessage } from '@/components/ui/button/auth/ErrorMessage';

type SigninFormProps = {
  onSuccess?: () => void;
};

export function SignupForm({ onSuccess }: SigninFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(data: SignupFormData) {
    const { confirmPassword, ...payload } = data;

    try {
      await apiFetch('/api/auth/signup', {
        method: 'POST',
        body: payload,
      });

      onSuccess?.();
    } catch (error) {
      console.error('SIGNUP ERROR: ', error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-20 max-w-sm space-y-6 rounded border p-6"
    >
      <h1 className="text-xl font-semibold">Sign up</h1>
      <div>
        <ErrorMessage message={errors.name?.message} />
        <Input placeholder="Name" {...register('name')} />
      </div>
      <div>
        <ErrorMessage message={errors.email?.message} />
        <Input type="email" placeholder="Email" {...register('email')} />
      </div>
      <div>
        <ErrorMessage message={errors.password?.message} />
        <Input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
      </div>
      <div>
        <ErrorMessage message={errors.confirmPassword?.message} />
        <Input
          type="password"
          placeholder="Confirm password"
          {...register('confirmPassword')}
        />
      </div>
      <Button type="submit" size="md" layout="block" variant="default">
        {isSubmitting ? 'Creating account...' : 'Sign up'}
      </Button>
    </form>
  );
}
