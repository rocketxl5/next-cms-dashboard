export type BulkUserActionKey =
  | 'edit'
  | 'activate'
  | 'suspend'
  | 'delete'
  | 'edit_role';

export type BulkUserAction = {
  key: BulkUserActionKey;
  label: string;
};

export const BULK_USER_ACTIONS: BulkUserAction[] = [
  { key: 'edit', label: 'Edit' },
  { key: 'activate', label: 'Activate' },
  { key: 'suspend', label: 'Suspend' },
  { key: 'delete', label: 'Delete' },
  { key: 'edit_role', label: 'Edit role' },
];
