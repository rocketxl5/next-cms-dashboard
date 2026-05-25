'use client';

import { Link } from '../../Link';
import { UserRound } from 'lucide-react';

export function SignInBtn() {
  return (
    <Link href="signin" variant="contrast" height="md" width="fit">
      {<UserRound size={22} />}
    </Link>
  );
}