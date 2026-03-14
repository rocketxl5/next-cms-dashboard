import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';

import { UserForm } from '../../form/_client/UserForm';
import {
  editUserSchema,
  UpdateUserValues,
} from '../../form/_domain/user-form.schema';

import { editUserAction } from '../../form/_server/edit-user.action';

import { APP_ROLES, USER_STATUS, THEME } from '@/types/enums';

import { mapDatabaseThemeToCss } from '@/lib/theme';

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

  return (
    <UserForm<UpdateUserValues>
      schema={editUserSchema}
      defaultValues={defaultValues}
       onSubmit={async (values) => {
    await editUserAction(user.id, values);
  }}
      fields={[
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
      ]}
    />
  );
}
