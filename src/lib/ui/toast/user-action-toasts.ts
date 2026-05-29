import { ActionConfig } from '@/lib/ui/toast';
import { UserActionKey } from '@/types/actions/domains';

export const USER_ACTION_TOASTS: Record<UserActionKey, ActionConfig> = {
  create: {
    label: 'Create',

    successToast: {
      title: 'User created',
      message: 'User created successfully',
    },

    errorToast: {
      title: 'Create failed',
      message: 'Could not create user',
    },
  },

  update: {
    label: 'Update',

    successToast: {
      title: 'User updated',
      message: 'Changes saved successfully',
    },

    errorToast: {
      title: 'Update failed',
      message: 'Could not update user',
    },
  },

  role: {
    label: 'Role update',

    successToast: {
      title: 'Role updated',
      message: 'User role updated successfully',
    },

    errorToast: {
      title: 'Role update failed',
      message: 'Could not update user role',
    },
  },

  suspend: {
    label: 'Suspend',

    successToast: {
      title: 'User suspended',
      message: 'Selected user suspended successfully',
    },

    errorToast: {
      title: 'Suspend failed',
      message: 'Could not suspend selected user',
    },
  },

  activate: {
    label: 'Activate',

    successToast: {
      title: 'User activated',
      message: 'Selected user activated successfully',
    },

    errorToast: {
      title: 'Activation failed',
      message: 'Could not activate selected user',
    },
  },

  delete: {
    label: 'Delete',

    successToast: {
      title: 'User deleted',
      message: 'Selected user deleted successfully',
      variant: 'destructive',
    },

    errorToast: {
      title: 'Delete failed',
      message: 'Could not delete selected user',
      variant: 'destructive',
    },
  },
};
