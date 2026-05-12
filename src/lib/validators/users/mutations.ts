import z from 'zod';

import { baseUserSchema } from './base';

import { requireAtLeastOneField } from '../helpers';

const partialUserMutationSchema =
  baseUserSchema
    .partial()
    .extend({
      id: z.string(),
    });

export const updateUserSchema =
  requireAtLeastOneField(
    partialUserMutationSchema,
    ['id']
  );