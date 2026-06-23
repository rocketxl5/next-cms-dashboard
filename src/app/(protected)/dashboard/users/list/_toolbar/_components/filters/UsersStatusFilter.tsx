import { Select } from '@/components/ui';

import { useUsersFilters } from '../../_hooks/useUsersFilters';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

import { USER_STATUS, UserStatus } from '@/types/enums';
import { UsersToolbarContext } from '../domain/users-dashboard-filters';

export function UsersStatusFilter({
  disabled,
  className,
}: UsersToolbarContext) {
  const { filters, setStatus } = useUsersFilters();

  return (
    <Select
      id="status"
      className={className}
      value={filters.status ?? ''}
      disabled={disabled}
      onChange={(e) => setStatus((e.target.value as UserStatus) || undefined)}
    >
      <option value="">Status</option>

      {USER_STATUS.map((status) => (
        <option key={status} value={status}>
          {normalizeDisplayString(status)}
        </option>
      ))}
    </Select>
  );
}
