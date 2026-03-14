import z from 'zod';
import { APP_ROLES, USER_STATUS, THEME } from '@/types/enums';

const baseUserSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.email('Invalid email'),
  role: z.enum(APP_ROLES),
  status: z.enum(USER_STATUS),
  theme: z.enum(THEME),
});

export const createUserSchema = baseUserSchema.extend({
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const editUserSchema = baseUserSchema.extend({
  password: z
    .string()
    .trim()
    .min(8, 'Password must be at least 8 characters')
    .optional()
    .or(z.literal('')),
});

export type CreateUserValues = z.infer<typeof createUserSchema>;
export type UpdateUserValues = z.infer<typeof editUserSchema>;

