'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AuthFormHeader, AuthFormFooter } from './';
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
import { description } from '@/lib/form';

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
    shouldFocusError: false,
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
    <Box direction="col" width="lg">
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <AuthFormHeader>
          <ZapLogo size={50} />
          <Title as="h1" size="2xl" weight="bold">
            Sign up to Zap
          </Title>
        </AuthFormHeader>
        <Form.Group
          label="Name"
          htmlFor="name"
          error={errors.name?.message}
          description={description.name}
        >
          <Input
            id="name"
            placeholder="Name"
            {...register('name')}
            variant={errors.name ? 'error' : 'default'}
          />
        </Form.Group>
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
          description={description.password}
        >
          <Input
            id="password"
            placeholder="Password"
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
          {isSubmitting ? 'Creating account...' : 'Sign up'}
        </Button>
      </Form.Root>
      <Divider border="subtle" spacing="lg" />
      <AuthFormFooter>
        <Box className="h-0" gap="sm">
          <span className="text-sm">Already have an account? </span>
          <Link
            href="/signin"
            textSize="sm"
            className="text-primary hover:underline p-0"
          >
            Sign In
          </Link>
        </Box>
      </AuthFormFooter>
    </Box>
  );
}
