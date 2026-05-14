'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AuthFormHeader, AuthFormFooter } from './';
import { FormGroup } from '@/components/ui/form';
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
    <Box direction="col">
      <AuthFormHeader>
        <ZapLogo size={50} />
        <Title as="h1" size="2xl" weight="bold">
          Sign in to Zap
        </Title>
      </AuthFormHeader>
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <Form.ErrorMessage message={errors.root?.message} />
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
            textSize="sm"
            padding="none"
            className="absolute right-0 -top-2 text-primary hover:underline"
          >
            Forgot password?
          </Link>
        </FormGroup>
        <Button type="submit" variant="success" height="lg" textSize="base">
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </Button>
      </Form.Root>
      <AuthFormFooter className="h-0 w-full text-center">
        <Divider border="subtle" />
        <span className="text-sm">New to Zap? </span>
        <Link
          href="/signup"
          height="auto"
          textSize="sm"
          className="text-primary hover:underline p-0"
        >
          Create an account
        </Link>
      </AuthFormFooter>
    </Box>
  );
}
