import z from "zod";

import { strongPasswordSchema } from "@/lib/validators/common";

export const resetPasswordSchema = z
    .object({
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

export type ResetPasswordData = z.infer<typeof resetPasswordSchema>;