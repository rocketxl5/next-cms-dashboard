import { UserStatus } from '@/types/enums';
import { Select } from '@/components/ui';
import { StatusSelectProps } from '@/types/form';

export function StatusSelect({
  value,
  handleChange,
  options,
  disabled,
}: StatusSelectProps) {
  return (
    <Select
      name="status"
      value={value}
      disabled={disabled}
      onChange={(e) => handleChange(e.target.value as UserStatus)}
    >
      {options.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </Select>
  );
}
