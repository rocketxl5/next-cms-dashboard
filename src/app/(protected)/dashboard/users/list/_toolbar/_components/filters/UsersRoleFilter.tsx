import { Select } from '@/components/ui';

import { useUsersFilters } from '../../_hooks/useUsersFilters';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

import { APP_ROLES, AppRole } from '@/types/enums';
import { UsersToolbarContext } from '../domain/users-dashboard-filters';

export function UsersRoleFilter({ disabled, className }: UsersToolbarContext) {
  const { filters, setRole } = useUsersFilters();

  return (
    <Select
      id="role"
      className={className}
      value={filters.role ?? ''}
      disabled={disabled}
      onChange={(e) => setRole((e.target.value as AppRole) || undefined)}
    >
      <option value="">Role</option>
      {APP_ROLES.map((r) => (
        <option key={r} value={r}>
          {normalizeDisplayString(r)}
        </option>
      ))}
    </Select>
  );
}
