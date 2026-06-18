import { Select } from '@/components/ui';

import { useUsersFilters } from '../../_hooks/useUsersFilters';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

import { USER_STATUS, UserStatus } from '@/types/enums';
import { UsersDashboardFilters } from './domain/users-dashboard-filters';

export function UsersStatusFilter({ disabled }: UsersDashboardFilters) {
  const { filters, setStatus } = useUsersFilters();

  return (
    <Select
      id="status"
      width="control"
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