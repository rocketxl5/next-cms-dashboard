import { AppRole } from '@/types/enums';
import { Select } from '@/components/ui';
import { RoleSelectProps } from '@/types/form';

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
          {role}
        </option>
      ))}
    </Select>
  );
}
