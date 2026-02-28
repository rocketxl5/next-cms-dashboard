import { AppRole } from '@/types/enums';

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
    
  return  (
      <div className="space-y-2">
        <select
          id="role"
          className="w-full rounded-md border px-3 py-2 text-sm"
          name="role"
          value={value}
          onChange={(e) => handleChange(e.target.value as AppRole)}
        >
          {assignableRoles.map((role) => (
            <option key={role} value={role} className='text-stone-950'>
              {role}
            </option>
          ))}
        </select>
      </div>
    );
}
