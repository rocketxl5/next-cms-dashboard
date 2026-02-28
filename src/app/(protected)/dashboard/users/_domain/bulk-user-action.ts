export type BulkUserActionKey = 'activate' | 'suspend' | 'delete';

export type BulkUserAction = {
  key: BulkUserActionKey;
  label: string;
};

export const BULK_USER_ACTIONS: BulkUserAction[] = [
  { key: 'activate', label: 'Activate' },
  { key: 'suspend', label: 'Suspend' },
  { key: 'delete', label: 'Delete' },
];
