import {
  Box,
  Link,
  Title,
  ZapLogo,
} from '@/components/ui';

import { AuthFormFooter, AuthFormHeader } from '..';

export function SentConfirmationMessage() {
  return (
    <Box direction="col" width="lg" gap="md">
      <AuthFormHeader>
        <ZapLogo size={50} />

        <Title as="h1" size="2xl" weight="bold">
          Check your email
        </Title>

        <p className="text-center text-sm text-muted-foreground">
          If an account exists, we&apos;ve sent a password reset link.
        </p>
      </AuthFormHeader>

      <AuthFormFooter>
        <Link
          href="/signin"
          textSize="sm"
          className="text-primary hover:underline p-0"
        >
          Back to sign in
        </Link>
      </AuthFormFooter>
    </Box>
  );
}