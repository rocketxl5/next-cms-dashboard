import { ActionDomainContent } from '@/types/actions';

export const BULK_ACTION_CONTENT = {
  blog: {
    delete: {
      title: 'Delete articles',
      description: 'These articles will be permanently removed.',
      confirmLabel: 'Delete all',
      cancelLabel: 'Cancel',
    },
  },

  user: {
    activate: {
      title: 'Activate users',
      description: 'These users will be activated.',
      confirmLabel: 'Activate all',
      cancelLabel: 'Cancel',
    },
    
    delete: {
      title: 'Delete users',
      description: 'These users will be permanently removed.',
      confirmLabel: 'Delete all',
      cancelLabel: 'Cancel',
    },

    suspend: {
      title: 'Suspend users',
      description: 'These users will lose access.',
      confirmLabel: 'Suspend all',
      cancelLabel: 'Cancel',
    },
  },

  product: {
    delete: {
      title: 'Delete products',
      description: 'These products will be permanently removed.',
      confirmLabel: 'Delete all',
      cancelLabel: 'Cancel',
    },
  },
} satisfies ActionDomainContent;
