'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormGroup } from '@/components/ui/form';
import { AuthFormHeader } from './AuthFormHeader';
import { Button, Form, Input, Link, Title, ZapLogo } from '@/components/ui';

import { useAuthSubmit } from '../_hook/useAuthSubmit';
import { signupFormSchema, SignupFormData } from '../_schema';

type SigninFormProps = {
  onSuccess?: () => void;
};

export function SignupForm({ onSuccess }: SigninFormProps) {
  const {
    register,
    handleSubmit,
    setError,
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
    setError,
  });

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <AuthFormHeader>
        <ZapLogo size={50} />
        <Title as="h1" size="2xl" weight="bold">
          Sign up to Zap
        </Title>
      </AuthFormHeader>
      <FormGroup label="Name" htmlFor="name" error={errors.name?.message}>
        <Input id="name" placeholder="Name" {...register('name')} />
      </FormGroup>
      <FormGroup label="Email" htmlFor="email" error={errors.email?.message}>
        <Input id="email" placeholder="Email" {...register('email')} />
      </FormGroup>
      <FormGroup
        label="Password"
        htmlFor="password"
        error={errors.password?.message}
      >
        <Input id="password" placeholder="Password" {...register('password')} />
      </FormGroup>
      <FormGroup
        label="Confirm password"
        htmlFor="confirmPassword"
        error={errors.confirmPassword?.message}
      >
        <Input
          id="confirmPassword"
          placeholder="Confirm password"
          {...register('confirmPassword')}
        />
      </FormGroup>
      <Button type="submit" variant="success" height="lg" textSize="base">
        {isSubmitting ? 'Creating account...' : 'Sign up'}
      </Button>
    </Form.Root>
  );
}
