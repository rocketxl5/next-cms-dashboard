'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthSubmit } from '../_hook/useAuthSubmit';

import { signupFormSchema, SignupFormData } from '../_schema/signup-form-schema';

import { Button } from '@/components/ui';
import { ErrorMessage, Input } from '@/components/ui/form';

type SigninFormProps = {
  onSuccess?: () => void;
};

export function SignupForm({ onSuccess }: SigninFormProps) {
  const {
    register,
    handleSubmit,
    // setError,
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

  const onSubmit = useAuthSubmit<
    SignupFormData,
    Omit<SignupFormData, 'confirmPassword'>
  >({
    endpoint: '/api/auth/signup',
    transform: ({ confirmPassword, ...payload }) => payload,
    onSuccess,
  });

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
      <Button type="submit" layout="block" variant="default">
        {isSubmitting ? 'Creating account...' : 'Sign up'}
      </Button>
    </form>
  );
}
