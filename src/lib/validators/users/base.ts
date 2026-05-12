import z from 'zod';

import {
  emailSchema,
  nameSchema,
} from '../common';

import {
  APP_ROLES,
  USER_STATUS,
  THEME,
} from '@/types/enums';

export const baseUserSchema = z.object({
  name: nameSchema,

  email: emailSchema,

  role: z.enum(APP_ROLES),

  status: z.enum(USER_STATUS),

  theme: z.enum(THEME),
});