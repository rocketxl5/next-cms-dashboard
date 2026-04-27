import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { Box, Button, Select, SearchDate } from '@/components/ui';

import { parseUsersQuery } from '../_lib/parse-users-query';
import { updateQueryParams } from '@/lib/url/update-query-params';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

import { DateKey } from '@/types/shared';
import { AppRole, APP_ROLES, UserStatus, USER_STATUS } from '@/types/enums';

export function UsersFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { filters } = parseUsersQuery(searchParams);

  const {
    role,
    status,
    createdFrom,
    createdTo,
    updatedFrom,
    updatedTo,
    search,
  } = filters;

  const today = new Date();

  const isActive =
    search?.trim() !== '' ||
    !!role ||
    !!status ||
    !!createdFrom ||
    !!createdTo ||
    !!updatedFrom ||
    !!updatedTo;

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

  const handleDateChange = (key: DateKey, value: string) => {
    update({ [key]: value || undefined });
  };

  const handleReset = () => {
    router.replace(`/dashboard/users?type=email`);
  };

  return (
    <Box className="flex items-center gap-4 flex-wrap">
      <SearchDate
        label="Created"
        from={{ dateKey: 'createdFrom', value: createdFrom }}
        to={{ dateKey: 'createdTo', value: createdTo }}
        maxDate={today}
        onSelect={handleDateChange}
      />
      <SearchDate
        label="Updated"
        from={{ dateKey: 'updatedFrom', value: updatedFrom }}
        to={{ dateKey: 'updatedTo', value: updatedTo }}
        maxDate={today}
        onSelect={handleDateChange}
      />

      <Select
        focus={false}
        value={role ?? ''}
        onChange={(e) => handleRoleChange(e.target.value as AppRole)}
      >
        <option value="">Role</option>
        {APP_ROLES.map((role) => (
          <option key={role} value={role}>
            {normalizeDisplayString(role)}
          </option>
        ))}
      </Select>

      <Select
        focus={false}
        value={status ?? ''}
        onChange={(e) => handleStatusChange(e.target.value as UserStatus)}
      >
        <option value="">Status</option>
        {USER_STATUS.map((status) => (
          <option key={status} value={status}>
            {normalizeDisplayString(status)}
          </option>
        ))}
      </Select>

      <Button onClick={handleReset} disabled={!isActive}>
        Clear
      </Button>
    </Box>
  );
}
