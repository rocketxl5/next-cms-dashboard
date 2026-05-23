'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AuthFormFooter, AuthFormHeader } from '..';
import { SentConfirmationMessage } from './SentConfirmationMessage';
import {
  Box,
  Button,
  Divider,
  Form,
  Input,
  Link,
  Title,
  ZapLogo,
} from '@/components/ui';

import { useFormSubmit } from '../../_hook';
import { forgotPasswordSchema, ForgotPasswordData } from '../../_schema';

export function ForgotPasswordForm() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
    shouldFocusError: false,
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = useFormSubmit<ForgotPasswordData>({
    endpoint: '/api/auth/forgot-password',
    onSuccess: () => setSent(true),
    setError,
  });

  if (sent) {
    return <SentConfirmationMessage />;
  }

  return (
    <Box direction="col">
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <AuthFormHeader>
          <ZapLogo size={50} />

          <Title as="h1" size="2xl" weight="bold">
            Forgot your password?
          </Title>

          <p className="text-center text-sm text-muted-foreground">
            Enter your email address and we&apos;ll send you a reset link.
          </p>
        </AuthFormHeader>

        <Form.Group label="Email" htmlFor="email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            {...register('email')}
            variant={errors.email ? 'error' : 'default'}
          />
        </Form.Group>

        <Button
          type="submit"
          variant="success"
          height="lg"
          textSize="base"
          className="mt-4"
        >
          {isSubmitting ? 'Sending reset link...' : 'Send reset link'}
        </Button>
      </Form.Root>

      <Divider border="subtle" spacing="lg" />

      <AuthFormFooter>
        <Box className="h-0" gap="sm">
          <span className="text-sm">Remember your password?</span>

          <Link
            href="/signin"
            textSize="sm"
            className="text-primary hover:underline p-0"
          >
            Sign in
          </Link>
        </Box>
      </AuthFormFooter>
    </Box>
  );
}