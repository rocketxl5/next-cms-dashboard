import z from "zod";
import { emailSchema, passwordSchema } from "@/lib/validators";

export const signinFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type SigninFormData = z.infer<typeof signinFormSchema>;