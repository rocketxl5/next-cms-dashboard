'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AuthFormFooter, AuthFormHeader } from '..';
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

import { useAuthSubmit } from '../../_hooks';
import {
  resetPasswordSchema,
  ResetPasswordData,
} from '../../_schema';

type ResetPasswordFormProps = {
  onSuccess?: () => void;
  token: string;
};

export function ResetPasswordForm({
  onSuccess,
  token,
}: ResetPasswordFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
    shouldFocusError: false,
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = useAuthSubmit<
    ResetPasswordData,
    ResetPasswordData & { token: string }
  >({
    endpoint: '/api/auth/reset-password',

    transform: (data) => ({
      ...data,
      token,
    }),

    onSuccess,
    setError,
  });

  return (
    <Box direction="col">
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <AuthFormHeader>
          <ZapLogo size={50} />

          <Title as="h1" size="2xl" weight="bold">
            Reset your password
          </Title>

          <p className="text-center text-sm text-muted-foreground">
            Enter a new password for your account.
          </p>
        </AuthFormHeader>

        <Form.Group
          label="New password"
          htmlFor="password"
          error={errors.password?.message}
        >
          <Input
            id="password"
            type="password"
            placeholder="New password"
            {...register('password')}
            variant={errors.password ? 'error' : 'default'}
          />
        </Form.Group>

        <Form.Group
          label="Confirm password"
          htmlFor="confirmPassword"
          error={errors.confirmPassword?.message}
        >
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm password"
            {...register('confirmPassword')}
            variant={errors.confirmPassword ? 'error' : 'default'}
          />
        </Form.Group>

        <Button
          type="submit"
          variant="success"
          height="lg"
          textSize="base"
          className="mt-4"
        >
          {isSubmitting ? 'Resetting password...' : 'Reset password'}
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