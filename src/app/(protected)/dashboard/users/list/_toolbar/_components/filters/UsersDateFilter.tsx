import { Box } from '@/components/ui';
import { CreatedAtFilter, UpdatedAtFilter } from './date';

import { UsersToolbarContext } from '../domain/users-dashboard-filters';

export function UsersDateFilter({ disabled }: UsersToolbarContext) {
  return (
    <Box position="relative">
      <CreatedAtFilter disabled={disabled} />
      <UpdatedAtFilter disabled={disabled} />
    </Box>
  );
}
