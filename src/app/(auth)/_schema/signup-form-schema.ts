import { z } from 'zod';
import {
  nameSchema,
  emailSchema,
  strongPasswordSchema,
} from '@/lib/validators/common';

/**
 * Signup form schema
 *
 * Responsibilities:
 * - validate email
 * - enforce strong password rules
 * - confirm password matching
 */
export const signupFormSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: strongPasswordSchema,
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine(
    (data) => !data.confirmPassword || data.password === data.confirmPassword,
    {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    },
  );

export type SignupFormData = z.infer<typeof signupFormSchema>;
