import { AppRole } from '@/types/enums';
import { color } from '@/lib/ui/tokens/primitives';
import { classNames } from '@/lib/utils/classNames';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

interface RoleBadgeProps {
  role: AppRole;
}

export function RoleBadge({ role }: RoleBadgeProps) {
  const roleToken = color.role[role];

  return (
    <span
      className={classNames(
        'inline-flex rounded-full px-2 py-0.5 text-sm font-medium',
        roleToken.background,
        roleToken.foreground,
      )}
    >
      {normalizeDisplayString(role)}
    </span>
  );
}
