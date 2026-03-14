import { Select } from '@/components/ui';
import { AppRole } from '@/types/enums';
import { RoleSelectProps } from '@/types/form';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

export function RoleSelect({
  value,
  handleChange,
  options,
  disabled,
}: RoleSelectProps) {
  return (
    <Select
      name="role"
      value={value}
      disabled={disabled}
      onChange={(e) => handleChange(e.target.value as AppRole)}
    >
      {options.map((role) => (
        <option key={role} value={role}>
          {normalizeDisplayString(role)}
        </option>
      ))}
    </Select>
  );
}
