import { UseFormSetError, FieldValues } from 'react-hook-form';

type SubmitFormOptions<T extends FieldValues, R> = {
  action: (data: T) => Promise<R>;
  data: T;
  setError?: UseFormSetError<T>;
  onSuccess?: (result: R) => void;
  fallbackMessage?: string;
};

export async function submitForm<T extends FieldValues, R>({
  action,
  data,
  setError,
  onSuccess,
  fallbackMessage = 'Something went wrong',
}: SubmitFormOptions<T, R>) {
  try {
    const result = await action(data);

    onSuccess?.(result);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
      
      if(setError) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setError('root' as any, {
            message: error?.message ?? fallbackMessage,
        });
        }
      else {
        console.error('FORM SUBMIT ERROR: ', error);
            
    } 
  }
}
