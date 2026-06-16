import { Select } from '@/components/ui';

import { useUsersFilters } from '../../_hooks/useUsersFilters';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

import { USER_STATUS, UserStatus } from '@/types/enums';

export function UsersStatusFilter() {
  const { filters, setStatus } = useUsersFilters();

  return (
      <Select
        id="status"
        value={filters.status ?? ''}
        onChange={(e) =>
          setStatus((e.target.value as UserStatus) || undefined)
        }
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