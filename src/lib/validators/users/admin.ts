import {z} from "zod";
import {
  emailSchema,
  nameSchema,
  strongPasswordSchema,
  roleEnum,
} from '../common';

export const createUserSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: strongPasswordSchema,
  role: roleEnum.default('USER'),
});

export const updateUserSchema = z
  .object({
    id: z.string(),
    name: nameSchema.optional(),
    email: emailSchema.optional(),
    role: roleEnum.optional(),
  })
  .refine((data) => data.name || data.email || data.role, {
    message: 'At least one field must be provided',
  });