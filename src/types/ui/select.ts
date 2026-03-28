import { selectTokens } from '@/lib/ui/tokens';

export interface SelectFieldProps<T> {
  value: T;
  handleChange: (value: T) => void;
  options: T[];
  disabled?: boolean;
}

export type SelectBorder = keyof typeof selectTokens.border;
