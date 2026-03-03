import { AppRole } from '@/types/enums';
import { Select } from '@/components/ui';

interface RoleSelectProps {
  value: AppRole;
  handleChange: (role: AppRole) => void;
  assignableRoles: AppRole[];
  disabled?: boolean;
}

export function RoleSelect({
  value,
  handleChange,
  assignableRoles,
  disabled,
}: RoleSelectProps) {
  return (
    <Select
      name="role"
      value={value}
      disabled={disabled}
      onChange={(e) => handleChange(e.target.value as AppRole)}
    >
      {assignableRoles.map((role) => (
        <option key={role} value={role}>
          {role}
        </option>
      ))}
    </Select>
  );
}
