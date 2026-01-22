import { Role } from '@prisma/client';
import { classNames } from '@/lib/utils/classNames';

interface RoleBadgeProps {
  role: Role; // <- use full Prisma Role
}

export function RoleBadge({ role }: RoleBadgeProps) {
  const isAdmin = role === 'ADMIN' || role === 'SUPER_ADMIN';

  return (
    <span
      className={classNames(
        'inline-flex rounded-full px-2 py-0.5 text-xs font-medium',
        role === 'SUPER_ADMIN'
          ? 'bg-red-100 text-red-700'
          : role === 'ADMIN'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-gray-200 text-gray-600',
      )}
    >
      {role}
    </span>
  );
}
