import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';

import { UpdateUserValues } from '../../form/_domain/user-form.schema';

import { EditUserFormWrapper } from '../../form/_client/EditUserFormWrapper';

import { APP_ROLES, USER_STATUS, THEME } from '@/types/enums';
import { mapDatabaseThemeToCss } from '@/lib/theme';
import { FormField } from '@/types/form';

export default async function EditUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) notFound();

  const defaultValues: UpdateUserValues = {
    name: user.name!,
    email: user.email,
    role: user.role,
    status: user.status,
    theme: mapDatabaseThemeToCss(user.theme),
    password: '',
  };

  const fields: FormField[] = [
    { name: 'name', label: 'Name' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    {
      name: 'role',
      label: 'Role',
      type: 'select',
      options: APP_ROLES.map((r) => ({ value: r })),
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: USER_STATUS.map((s) => ({ value: s })),
    },
    {
      name: 'theme',
      label: 'Theme',
      type: 'select',
      options: THEME.map((t) => ({ value: t })),
    },
  ];

  return (
    <EditUserFormWrapper
      id={id}
      defaultValues={defaultValues}
      fields={fields}
    />
  );
}
