import z from "zod";

/**
 * -------------------------------------------------------
 * Password
 * -------------------------------------------------------
 */

/**
 * Base password presence validation.
 *
 * Used when:
 * - password field is required
 * - password input cannot be empty
 *
 * Examples:
 * - signin
 * - signup
 * - password reset
 * - password change
 */
export const passwordRequiredSchema = z
  .string()
  .min(1, {
    message: 'Password is required',
  });

/**
 * Password validation used for authentication flows.
 *
 * Signin should validate:
 * - presence only
 *
 * NOT password policy rules.
 *
 * Existing users may have:
 * - legacy passwords
 * - older policy formats
 * - imported credentials
 */
export const signinPasswordSchema =
  passwordRequiredSchema;

/**
 * Strong password policy validation.
 *
 * Used for:
 * - signup
 * - password reset
 * - password change
 */
export const strongPasswordSchema =
  passwordRequiredSchema
    .min(8, {
      message:
        'Password must be at least 8 characters long',
    })
    .regex(/[a-z]/, {
      message:
        'Password must contain a lowercase letter',
    })
    .regex(/[A-Z]/, {
      message:
        'Password must contain an uppercase letter',
    })
    .regex(/[0-9]/, {
      message:
        'Password must contain a number',
    })
    .regex(/^\S+$/, {
      message:
        'Password must not contain spaces',
    });