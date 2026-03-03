import z from 'zod';
import { APP_ROLES, USER_STATUS, THEME } from '@/types/enums';
import { UserFormMode } from '@/types/form';

export function createUserFormSchema(mode: UserFormMode) {
  return z.object({
    name: z.string().min(3, { message: 'Name must be at least 2 characters' }),

    email: z.email({
      message: 'Invalid email',
    }),

    password:
      mode === 'create'
        ? z.string().min(8, {
            message: 'Password must be at least 8 characters',
          })
        : z
            .string()
            .min(8, {
              message: 'Password must be at least 8 characters',
            })
            .optional()
            .or(z.literal('')),

    role: z.enum(APP_ROLES),

    status: z.enum(USER_STATUS),

    theme: z.enum(THEME),
  });
}
