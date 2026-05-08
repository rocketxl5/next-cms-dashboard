'use client';

import { Link } from '../../Link';
import { Power } from 'lucide-react';

export function SignInBtn() {
  return (
    <Link href="signin" variant="foreground">
      {<Power size={22} />}
    </Link>
  );
}