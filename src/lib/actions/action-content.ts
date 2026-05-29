import { ActionDomainContent } from '@/types/actions';

export const ACTION_CONTENT = {
  blog: {
    delete: {
      title: 'Delete article',
      description:
        'This article will be permanently removed.',
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
    },
  },
  user: {
    delete: {
      title: 'Delete user',
      description: 'This user will be permenently removed.',
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
    },

    suspend: {
      title: 'Suspend user',
      description: 'This user will lose access.',
      confirmLabel: 'Suspend',
      cancelLabel: 'Cancel',
    },
  },

  product: {
    delete: {
      title: 'Delete product',
      description:
        'This product will be permanently removed.',
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
    },
  },
} satisfies ActionDomainContent;