import { Box } from '@/components/ui';
import { CreatedAtFilter, UpdatedAtFilter } from './date';

import { UsersDashboardFilters } from '../domain/users-dashboard-filters';

export function UsersDateFilter({ disabled }: UsersDashboardFilters) {
  return (
    <Box position="relative">
      <CreatedAtFilter disabled={disabled} />
      <UpdatedAtFilter disabled={disabled} />
    </Box>
  );
}
