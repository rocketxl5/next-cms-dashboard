'use client';

import { Input } from './Input';

type SearchFieldProps = {
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export function SearchField({ value, placeholder, onChange }: SearchFieldProps) {
  return (
    <Input
      type="search"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
