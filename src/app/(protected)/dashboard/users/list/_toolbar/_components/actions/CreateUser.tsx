'use client';

import { Box, Link } from '@/components/ui';
import { UserRoundPlus } from 'lucide-react';

export function CreateUser() {
  return (
    <Box width="full" justify="between" align="center">
      <Link
        height="md"
        width="square"
        variant="success"
        href="/dashboard/users/create"
        title="Create User"
        aria-label="Create User"
      >
        <UserRoundPlus size={22} />
      </Link>
    </Box>
  );
}
