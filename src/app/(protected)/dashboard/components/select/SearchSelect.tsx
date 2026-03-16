'use client';

import { Select } from '@/components/ui';
import { normalizeDisplayString } from '@/lib/utils/normalizers';
import { UsersParams } from '@/types/shared';

interface SearchSelectProps {
  name?: string;
  value: string;
  options: readonly string[];
  handleChange: (value: UsersParams) => void;
  disabled?: boolean;
}

export function SearchSelect({
  name,
  value,
  options,
  handleChange,
  disabled = false,
}: SearchSelectProps) {
  return (
    <Select
      name={name}
      value={value}
      disabled={disabled}
      onChange={(e) => handleChange(e.target.value as UsersParams)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {normalizeDisplayString(option)}
        </option>
      ))}
    </Select>
  );
}
