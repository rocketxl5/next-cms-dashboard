'use server';

import { Prisma } from '@prisma/client/edge';
import { hash } from 'bcryptjs';

import prisma from '@/lib/prisma';
import { mapCssThemeToDatabase } from '@/lib/theme';
import { editUserSchema, EditUserFormValues } from '@/lib/validators/users';

export async function editUserAction(id: string, values: EditUserFormValues) {
  const parsed = editUserSchema.safeParse(values);

  if (!parsed.success) throw new Error('Invalid form data');

  const { password, theme, ...data } = parsed.data;

  const updateData: Prisma.UserUpdateInput = {
    ...data,

    theme: mapCssThemeToDatabase(theme),
  };

  if (password) {
    updateData.password = await hash(password, 10);
  }

  await prisma.user.update({
    where: { id },
    data: updateData,
  });
}
