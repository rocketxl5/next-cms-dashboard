export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type InputField = {
  name: 'name' | 'email' | 'password';
  label: string;
  type?: string;
  required?: boolean;
};