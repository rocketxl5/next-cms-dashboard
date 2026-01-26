import { classNames } from '@/lib/utils/classNames';
import { UserStatus } from '@/types/shared';

interface StatusBadgeProps {
  status: UserStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={classNames(
        'inline-flex rounded-full px-2 py-0.5 text-xs font-medium',
        status === 'active' && 'bg-green-500/10 text-green-600',
        status === 'inactive' && 'bg-muted text-muted-foreground',
        status === 'suspended' && 'bg-yellow-500/10 text-yellow-600',
      )}
    >
      {status}
    </span>
  );
}
