import { FieldValues, Path, UseFormSetError } from 'react-hook-form';

type FieldErrors = Record<string, string[]>;

export function applyFieldErrors<T extends FieldValues>(
  errors: FieldErrors,
  setError: UseFormSetError<T>,
) {
  Object.entries(errors).forEach(([field, messages]) => {
    setError(field as Path<T>, {
      type: 'server',
      message: messages[0],
    });
  });
}
