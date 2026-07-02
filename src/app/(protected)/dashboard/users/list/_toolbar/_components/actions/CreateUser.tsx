import { Link } from '@/components/ui';
import { UserRoundPlus } from 'lucide-react';

import { UsersToolbarContext } from '../domain/users-dashboard-filters';

export function CreateUser({ className }: UsersToolbarContext) {
  return (
    <Link
      className={className}
      variant="success"
      href="/dashboard/users/create"
      title="Create User"
      aria-label="Create User"
    >
      <UserRoundPlus size={22} />
    </Link>
  );
}
