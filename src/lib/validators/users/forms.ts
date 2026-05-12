import z from 'zod';

import { baseUserSchema } from './base';

import { strongPasswordSchema } from '../common';

export const createUserSchema = baseUserSchema.extend({
  password: strongPasswordSchema,
});

export const editUserSchema = baseUserSchema.extend({
  password: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => {
        if (!val) return true; // allow empty (no update)
        return strongPasswordSchema.safeParse(val).success;
      },
      {
        message: 'Password is not strong enough',
      },
    ),
});
