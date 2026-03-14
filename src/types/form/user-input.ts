export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type FieldName =
  | 'name'
  | 'email'
  | 'password'
  | 'role'
  | 'status'
  | 'theme';

export type FieldType = 'text' | 'email' | 'password' | 'select';

export type FormField = {
  name: FieldName;
  label: string;
  type?: FieldType;
  required?: boolean;
  options?: { value: string }[];
};