import { classNames } from '@/lib/utils/classNames';
import { color } from '@/lib/ui/tokens/primitives';
import { UserStatus } from '@/types/enums';

interface StatusBadgeProps {
  status: UserStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusToken = color.status[status.toLowerCase()];
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
