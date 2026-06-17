import { Box, Dropdown, FieldGroup, SearchDate } from '@/components/ui';

import { useUsersFilters } from '../../_hooks/useUsersFilters';

type UsersFiltersProps = {
  disabled?: boolean;
};

export function UsersDateFilter({ disabled }: UsersFiltersProps) {
  const { filters, updateDateFilter } = useUsersFilters();

  const today = new Date();

  return (
    <Dropdown.Root>
      <Box position="relative">
        <Dropdown.Trigger disabled={disabled}>Date</Dropdown.Trigger>
        <Dropdown.Content align="start" className="p-3">
          <Box>
            <FieldGroup
              className="pt-1"
              htmlFor="created"
              label="Created"
              labelVariant="strong"
            >
              <SearchDate
                from={{ dateKey: 'createdFrom', value: filters.createdFrom }}
                to={{ dateKey: 'createdTo', value: filters.createdTo }}
                maxDate={today}
                onSelect={(key, value) =>
                  updateDateFilter(key, value || undefined)
                }
              />
            </FieldGroup>
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
          </Box>
        </Dropdown.Content>
      </Box>
    </Dropdown.Root>
  );
}
