import { AppRole } from '@/types/enums';
import { useTheme } from '@/providers';

interface RoleSelectProps {
  value: AppRole;
  handleChange: (role: AppRole) => void;
  assignableRoles: AppRole[];
}

export function RoleSelect({
  value,
  handleChange,
  assignableRoles,
}: RoleSelectProps) {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div className="space-y-2">
      <select
        data-theme={theme}
        className="

    border border-zinc-300
    w-full px-3 py-2 text-sm
  "
        name="role"
        value={value}
        onChange={(e) => handleChange(e.target.value as AppRole)}
      >
        {assignableRoles.map((role) => (
          <option data-theme={theme} key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
}
