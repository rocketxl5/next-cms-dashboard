import z from 'zod';

import {
  createUserSchema,
  editUserSchema,
} from './forms';

import { updateUserSchema } from './mutations';

export type CreateUserValues =
  z.infer<typeof createUserSchema>;
  
export type UpdateUserPayload =
  z.infer<typeof updateUserSchema>;
  
export type EditUserFormValues =
  z.input<typeof editUserSchema>;

export type EditUserValues =
  z.output<typeof editUserSchema>;