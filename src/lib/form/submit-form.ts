import { UseFormSetError, FieldValues } from 'react-hook-form';

type SubmitFormOptions<R> = {
  action: () => Promise<R>;
  onSuccess?: (result: R) => void;
  fallbackMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setError?: UseFormSetError<any>;
};

export async function submitForm<T extends FieldValues, R>({
  action,
  setError,
  onSuccess,
  fallbackMessage = 'Something went wrong',
}: SubmitFormOptions<R>) {
  try {
    const result = await action();

    onSuccess?.(result);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (setError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setError('root' as any, {
        message: error?.message ?? fallbackMessage,
      });
    } else {
      console.error('FORM SUBMIT ERROR: ', error);
    }
  }
}
