'use client';

import { Label, Select } from '@/components/ui';
import { normalizeDisplayString } from '@/lib/utils/normalizers';

type Border = 'none' | 'default' | 'subtle' | 'strong';

interface SearchSelectProps<T extends string> {
  className?: string;
  border?: Border;
  focus?: boolean;
  label?: string;
  name?: string;
  value: T | '';
  options: readonly T[];
  handleChange: (value: T) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function SearchSelect<T extends string>({
  className,
  label = '',
  name,
  border,
  focus,
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
        className={className}
        border={border}
        focus={focus}
        name={name}
        value={value || ''}
        disabled={disabled}
        onChange={(e) => handleChange(e.target.value as T)}
      >
        {placeholder ? <option value="">{placeholder}</option> : ''}
        {options.map((option) => (
          <option key={option} value={option}>
            {normalizeDisplayString(option)}
          </option>
        ))}
      </Select>
    </>
  );
}
