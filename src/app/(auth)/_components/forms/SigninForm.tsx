'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AuthFormHeader, AuthFormFooter } from '..';

import {
  Box,
  Button,
  Divider,
  Form,
  Input,
  Link,
  Title,
  ZapLogo,
} from '@/components/ui/';

import { useAuthSubmit } from '../../_hooks';
import { signinFormSchema, SigninFormData } from '../../_schema';

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
    shouldFocusError: false,
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
    <Box direction="col">
      <AuthFormHeader>
        <ZapLogo size={50} />
        <Title as="h1" size="2xl" weight="bold">
          Sign in to Zap
        </Title>
      </AuthFormHeader>
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <Form.ErrorMessage message={errors.root?.message} />
        <Form.Group label="Email" htmlFor="email" error={errors.email?.message}>
          <Input
            id="email"
            placeholder="Email"
            {...register('email')}
            variant={errors.email ? 'error' : 'default'}
          />
        </Form.Group>
        <Form.Group
          label="Password"
          htmlFor="password"
          error={errors.password?.message}
        >
          <Input
            id="password"
            placeholder="Password"
            type="password"
            variant={errors.password ? 'error' : 'default'}
            {...register('password')}
          />
          <Link
            href="/forgot-password"
            textSize="sm"
            padding="none"
            className="absolute right-0 -top-2 text-primary hover:underline"
          >
            Forgot password?
          </Link>
        </Form.Group>
        <Button type="submit" variant="success" height="lg" textSize="base">
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </Button>
      </Form.Root>
      <Divider border="subtle" spacing="lg" />
      <AuthFormFooter>
        <Box className="h-0" gap="sm">
          <span className="text-sm">New to Zap? </span>
          <Link
            href="/signup"
            textSize="sm"
            className="text-primary hover:underline p-0"
          >
            Create an account
          </Link>
        </Box>
      </AuthFormFooter>
    </Box>
  );
}
