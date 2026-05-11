import z from 'zod';
import { emailSchema, passwordInputSchema } from '@/lib/validators';

export const signinFormSchema = z.object({
  email: emailSchema,
  password: passwordInputSchema,
});

export type SigninFormData = z.infer<typeof signinFormSchema>;
