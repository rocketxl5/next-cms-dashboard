'use server';

import { Prisma } from '@prisma/client';
import prisma from '@/lib/prisma';
import { editUserSchema, UpdateUserValues } from '../_domain/user-form.schema';
import { hash } from 'bcryptjs';
import { mapCssThemeToDatabase } from '@/lib/theme';

export async function editUserAction(id: string, values: UpdateUserValues) {
  const parsed = editUserSchema.safeParse(values);

  if (!parsed.success) throw new Error('Invalid form data');

  const data = parsed.data;

  const { name, email, role, status, theme } = data;

  const updateData: Prisma.UserUpdateInput = {
    name,
    email,
    role,
    status,
    theme: mapCssThemeToDatabase(theme),
  };

  if (data.password) {
    updateData.password = await hash(data.password, 10);
  }

  await prisma.user.update({
    where: { id },
    data: updateData,
  });
}
