'use client';

import { UserForm } from '../form/_client/UserForm';
import {
  createUserSchema,
  CreateUserValues,
} from '../form/_domain/user-form.schema';
import { createUserAction } from '../form/_server/create-user.action';

export default function CreateUserPage() {
  return (
    <UserForm<CreateUserValues>
      schema={createUserSchema}
      onSubmit={createUserAction}
      defaultValues={{
        name: '',
        email: '',
        password: '',
        role: 'USER',
        status: 'ACTIVE',
        theme: 'system',
      }}
      fields={[
        { name: 'name', label: 'Name', required: true },
        { name: 'email', label: 'Email', required: true },
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          required: true,
        },
        {
      name: 'role',
      label: 'Role',
      type: 'select',
      options: [
        { label: 'User', value: 'USER' },
        { label: 'Editor', value: 'EDITOR' },
        { label: 'Admin', value: 'ADMIN' },
        { label: 'Super Admin', value: 'SUPER_ADMIN' },
      ],
      required: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: [
        { label: 'Active', value: 'ACTIVE' },
        { label: 'Pending', value: 'PENDING' },
        { label: 'Suspended', value: 'SUSPENDED' },
      ],
      required: true,
    },
      ]}
    />
  );
}
