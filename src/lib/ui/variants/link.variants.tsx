import { cva, type VariantProps } from 'class-variance-authority';
import { linkTokens } from '../tokens/components';

export const linkVariants = cva(linkTokens.base, {
  variants: {
    variant: linkTokens.variant,
    border: linkTokens.border,
    size: linkTokens.size,
    layout: linkTokens.layout,
    radius: linkTokens.radius,

    active: {
      true: '',
      false: '',
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'md',
    layout: 'inline',
    border: 'default',
    radius: 'md',
    active: false,
  },

  compoundVariants: [
    {
      variant: 'nav',
      active: true,
      className: 'bg-muted font-medium',
    },
  ],
});

export type LinkVariants = VariantProps<typeof linkVariants>;
