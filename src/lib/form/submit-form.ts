import { UseFormSetError, FieldValues } from 'react-hook-form';

import { getErrorMessage } from './get-error-message';

/**
 * Shared form submission helper.
 *
 * Responsibilities:
 * - Executes async form actions safely
 * - Centralizes try/catch handling
 * - Normalizes unknown runtime errors into user-facing messages
 * - Integrates with react-hook-form root errors
 * - Executes optional success callbacks
 *
 * Notes:
 * - This helper intentionally handles only GLOBAL form errors for now.
 * - Field-level validation errors can be added later through
 *   structured backend error handling.
 * - Errors are typed as `unknown` to preserve TypeScript safety.
 * - `TFieldValues` keeps RHF `setError` fully typed.
 * - `TResult` represents the successful action result type.
 */

type SubmitFormOptions<TFieldValues extends FieldValues, TResult> = {
  // Async action executed during form submission.
  action: () => Promise<TResult>;
  // Optional success callback executed after a successful action.
  onSuccess?: (result: TResult) => void;
  // Fallback message used when the thrown error does not expose a valid string message.
  fallbackMessage?: string;
  // Optional RHF setError handler used to register root-level form errors.
  setError?: UseFormSetError<TFieldValues>;
};

// Executes a form submission action with centralized error handling.
export async function submitForm<TFieldValues extends FieldValues, TResult>({
  action,
  setError,
  onSuccess,
  fallbackMessage = 'Something went wrong',
}: SubmitFormOptions<TFieldValues, TResult>) {
  try {
    const result = await action();

    onSuccess?.(result);
  } catch (error: unknown) {
    const message = getErrorMessage(error, fallbackMessage);
    // If RHF (react hook form) error handling is available, register a root-level form error.
    if (setError) {
      setError('root', {
        type: 'server',
        message,
      });
    } else {
      // Fallback logging for non-form usage.
      console.error('FORM SUBMIT ERROR: ', error);
    }
  }
}
