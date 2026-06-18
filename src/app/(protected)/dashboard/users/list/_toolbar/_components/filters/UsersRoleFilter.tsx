import { Box, Select } from '@/components/ui';

import { useUsersFilters } from '../../_hooks/useUsersFilters';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

import { APP_ROLES, AppRole } from '@/types/enums';
import { UsersDashboardFilters } from './domain/users-dashboard-filters';

export function UsersRoleFilter({ disabled }: UsersDashboardFilters) {
  const { filters, setRole } = useUsersFilters();

  return (
    <Box>
      <Select
        id="role"
        width="control"
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
    </Box>
  );
}
