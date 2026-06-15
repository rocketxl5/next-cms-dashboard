import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { Box, Dropdown, FieldGroup, Select, SearchDate } from '@/components/ui';
import { SlidersHorizontal } from 'lucide-react';

import { parseUsersQuery } from '../../_lib/parse-users-query';
import { updateQueryParams } from '@/lib/url/update-query-params';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

import { AppRole, APP_ROLES, UserStatus, USER_STATUS } from '@/types/enums';

type UsersFiltersProps = {
  filters: ReturnType<typeof parseUsersQuery>['filters'];
  onUpdate: (params: Record<string, string | undefined>) => void;

  isActive: boolean;
  activeCount: number;

  disabled?: boolean;
};

export function UsersFilters({
  filters,
  onUpdate,
  disabled,
}: UsersFiltersProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { role, status, createdFrom, createdTo, updatedFrom, updatedTo } =
    filters;

  const today = new Date();

  const pathname = usePathname();

  const update = (params: Record<string, string | undefined>) => {
    const query = updateQueryParams(searchParams, {
      ...params,
      page: '1',
    });

    router.replace(`${pathname}?${query}`);
  };

  const handleRoleChange = (value: AppRole | '') => {
    update({ role: value || undefined });
  };

  const handleStatusChange = (value: UserStatus | '') => {
    update({ status: value || undefined });
  };

  return (
    <Dropdown.Root>
      <Box position="relative">
        <Dropdown.Trigger variant="contrast" disabled={disabled}>
          <span className="flex items-center gap-2">
            <SlidersHorizontal size={22} />
          </span>
        </Dropdown.Trigger>
        <Dropdown.Content align="start" className="p-3">
          <Box>
            <FieldGroup
              className="pt-1"
              htmlFor="created"
              label="Created"
              labelVariant="strong"
            >
              <SearchDate
                from={{ dateKey: 'createdFrom', value: createdFrom }}
                to={{ dateKey: 'createdTo', value: createdTo }}
                maxDate={today}
                onSelect={(key, value) =>
                  onUpdate({ [key]: value || undefined })
                }
              />
            </FieldGroup>
            <FieldGroup htmlFor="updated" label="Updated" labelVariant="strong">
              <SearchDate
                from={{ dateKey: 'updatedFrom', value: updatedFrom }}
                to={{ dateKey: 'updatedTo', value: updatedTo }}
                maxDate={today}
                onSelect={(key, value) =>
                  onUpdate({ [key]: value || undefined })
                }
              />
            </FieldGroup>
            <Box>
              <FieldGroup htmlFor="role" label="Role" labelVariant="strong">
                <Select
                  id="role"
                  height="sm"
                  focus={false}
                  value={role ?? ''}
                  onChange={(e) => handleRoleChange(e.target.value as AppRole)}
                >
                  <option value="">All</option>
                  {APP_ROLES.map((role) => (
                    <option key={role} value={role}>
                      {normalizeDisplayString(role)}
                    </option>
                  ))}
                </Select>
              </FieldGroup>
            </Box>
            <Box>
              <FieldGroup label="Status" htmlFor="status" labelVariant="strong">
                <Select
                  id="status"
                  height="sm"
                  focus={false}
                  value={status ?? ''}
                  onChange={(e) =>
                    handleStatusChange(e.target.value as UserStatus)
                  }
                >
                  <option value="">All</option>
                  {USER_STATUS.map((status) => (
                    <option key={status} value={status}>
                      {normalizeDisplayString(status)}
                    </option>
                  ))}
                </Select>
              </FieldGroup>
            </Box>
          </Box>
        </Dropdown.Content>
      </Box>
    </Dropdown.Root>
  );
}
