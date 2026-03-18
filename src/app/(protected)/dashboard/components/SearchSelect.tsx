'use client';

import { Label, Select } from '@/components/ui';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

interface SearchSelectProps<T extends string> {
  label?: string;
  name?: string;
  value: T | '';
  options: readonly T[];
  handleChange: (value: T) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function SearchSelect<T extends string>({
  label = '',
  name,
  value,
  options,
  handleChange,
  disabled = false,
  placeholder = '',
}: SearchSelectProps<T>) {
  //   const handleSelectChange = (value: string) => {
  //  const match = options.find((option) => option === value);

  //  if (match) {
  //    handleChange(match);
  //  }
  // };
  return (
    <>
      {label && <Label htmlFor={label}>{label}</Label>}
      <Select
        name={name}
        value={value || ''}
        disabled={disabled}
        onChange={(e) => handleChange(e.target.value as T)}
      >
        <option value="">{placeholder ?? 'Select'}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {normalizeDisplayString(option)}
          </option>
        ))}
      </Select>
    </>
  );
}
