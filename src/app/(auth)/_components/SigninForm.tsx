'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AuthFormHeader } from './AuthFormHeader';
import { FormGroup } from '@/components/ui/form';
import {
  Box,
  Button,
  Form,
  Input,
  Link,
  Title,
  ZapLogo,
} from '@/components/ui/';

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
      <Box direction="col">
        <AuthFormHeader>
          <ZapLogo size={50} />
          <Title as="h1" size="2xl" weight="bold">
            Sign in to Zap
          </Title>
        </AuthFormHeader>
        <Form.ErrorMessage message={errors.root?.message} />
      </Box>
      <FormGroup label="Email" htmlFor="email" error={errors.email?.message}>
        <Input id="email" placeholder="Email" {...register('email')} />
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
        <Link
          href="/forgot-password"
          className="absolute right-0 p-0 -top-2 text-sm text-primary hover:underline"
        >
          Forgot password?
        </Link>
      </FormGroup>
      <Button type="submit" variant="success" height="lg" textSize="base">
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </Button>
    </Form.Root>
  );
}
