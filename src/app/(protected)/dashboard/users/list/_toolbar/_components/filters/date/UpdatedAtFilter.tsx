import { Box, Dropdown, FieldGroup, SearchDate } from '@/components/ui';

import { useUsersFilters } from '../../../_hooks/useUsersFilters';

import { UsersDashboardFilters } from '../domain/users-dashboard-filters';

export function UpdatedAtFilter({ disabled }: UsersDashboardFilters) {
  const { filters, updateDateFilter } = useUsersFilters();

  const today = new Date();

  return (
    <Dropdown.Root>
      <Box position="relative">
        <Dropdown.Trigger disabled={disabled}>Updated</Dropdown.Trigger>
        <Dropdown.Content align="start" className="p-3">
          <FieldGroup htmlFor="updated" label="Updated" labelVariant="strong">
            <SearchDate
              from={{ dateKey: 'updatedFrom', value: filters.updatedFrom }}
              to={{ dateKey: 'updatedTo', value: filters.updatedTo }}
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
