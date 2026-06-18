import { Link } from '@/components/ui';
import { UserRoundPlus } from 'lucide-react';

export function CreateUser() {
  return (
    <Link
      height="md"
      layout="block"
      variant="success"
      href="/dashboard/users/create"
      title="Create User"
      aria-label="Create User"
    >
      <UserRoundPlus size={22} />
    </Link>
  );
}
