export interface SelectFieldProps<T> {
  value: T;
  handleChange: (value: T) => void;
  options: T[];
  disabled?: boolean;
}

export type SelectBorder = 'none' | 'default' | 'subtle' | 'strong';
