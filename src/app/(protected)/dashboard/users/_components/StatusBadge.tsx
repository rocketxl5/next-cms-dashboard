import { classNames } from '@/lib/utils/classNames';
import { UserStatus } from '@/types/shared';
import { color } from '@/lib/ui/tokens';

interface StatusBadgeProps {
  status: UserStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusToken = color.status[status];
  return (
    <span
      className={classNames(
        'inline-flex rounded-full px-2 py-0.5 text-xs font-medium',
        statusToken.background,
        statusToken.foreground,
      )}
    >
      {status}
    </span>
  );
}
