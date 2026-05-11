import z from 'zod';
import { emailSchema, signinPasswordSchema } from '@/lib/validators';

export const signinFormSchema = z.object({
  email: emailSchema,
  password: signinPasswordSchema,
});

export type SigninFormData = z.infer<typeof signinFormSchema>;
