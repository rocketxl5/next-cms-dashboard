import { CreateUserFormWrapper } from '../form/_client/CreateUserFormWrapper';

import { CreateUserValues } from '../form/_domain/user-form.schema';
import { APP_ROLES, USER_STATUS } from '@/types/enums';
import { FormField } from '@/types/form';

export default function CreateUserPage() {
  const defaultValues: CreateUserValues = {
    name: '',
    email: '',
    password: '',
    role: 'USER',
    status: 'ACTIVE',
    theme: 'system',
  };

  const fields: FormField[] = [
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
      options: APP_ROLES.map((r) => ({ value: r })),
      required: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: USER_STATUS.map((s) => ({ value: s })),
      required: true,
    },
  ];

  return (
    <CreateUserFormWrapper defaultValues={defaultValues} fields={fields} />
  );
}
