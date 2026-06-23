import { Box, Dropdown, FieldGroup, SearchDate } from '@/components/ui';

import { useUsersFilters } from '../../../_hooks/useUsersFilters';

import { UsersToolbarContext } from '../../domain/users-dashboard-filters';

export function CreatedAtFilter({ disabled, className }: UsersToolbarContext) {
  const { filters, updateDateFilter } = useUsersFilters();

  const today = new Date();

  return (
    <Dropdown.Root>
      <Box position="relative">
        <Dropdown.Trigger className={className} disabled={disabled}>
          Created
        </Dropdown.Trigger>
        <Dropdown.Content align="start" className="p-3">
          <FieldGroup className="pt-1" htmlFor="created" label="Created">
            <SearchDate
              from={{ dateKey: 'createdFrom', value: filters.createdFrom }}
              to={{ dateKey: 'createdTo', value: filters.createdTo }}
              maxDate={today}
              onSelect={(key, value) =>
                updateDateFilter(key, value || undefined)
              }
            />
          </FieldGroup>
        </Dropdown.Content>
      </Box>
    </Dropdown.Root>
  );
}
