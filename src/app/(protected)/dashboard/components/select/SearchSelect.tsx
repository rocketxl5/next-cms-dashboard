'use client';

import { Select } from '@/components/ui';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

interface SearchSelectProps {
  name?: string;
  value: string;
  options: readonly string[];
  handleChange: (value: string) => void;
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
      onChange={(e) => handleChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {normalizeDisplayString(option)}
        </option>
      ))}
    </Select>
  );
}
