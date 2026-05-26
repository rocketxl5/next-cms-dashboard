import { ActionConfig } from "@/lib/ui/toast";
import { UserActionKey } from "@/types/actions";

export const USER_ACTION_TOASTS: Record<
  UserActionKey,
  ActionConfig
> = {
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
      title: 'Users suspended',
      message: 'Selected users suspended successfully',
    },

    errorToast: {
      title: 'Suspend failed',
      message: 'Could not suspend selected users',
    },
  },

  activate: {
    label: 'Activate',

    successToast: {
      title: 'Users activated',
      message: 'Selected users activated successfully',
    },

    errorToast: {
      title: 'Activation failed',
      message: 'Could not activate selected users',
    },
  },

  delete: {
    label: 'Delete',

    successToast: {
      title: 'Users deleted',
      message: 'Selected users deleted successfully',
      variant: 'destructive',
    },

    errorToast: {
      title: 'Delete failed',
      message: 'Could not delete selected users',
      variant: 'destructive',
    },
  },
};