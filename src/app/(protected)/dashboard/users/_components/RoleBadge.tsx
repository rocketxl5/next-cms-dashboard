import { DashboardRole } from '../_domain/dashboard-role';
import { classNames } from '@/lib/utils/classNames';

interface RoleBadgeProps {
  role: DashboardRole;
}

export function RoleBadge({ role }: RoleBadgeProps) {
  return (
    <span
      className={classNames(
        'inline-flex rounded-full px-2 py-0.5 text-xs font-medium',
        role === 'SUPER_ADMIN'
          ? 'bg-destructive/10 text-destructive'
          : 'bg-muted text-foreground',
    )}
    >
      {role === 'SUPER_ADMIN' ? 'Super Admin' : 'Admin'}
    </span>
  );
}
