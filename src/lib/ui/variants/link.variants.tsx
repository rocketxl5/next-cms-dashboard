import { cva, type VariantProps } from 'class-variance-authority';
import { linkTokens } from '../tokens/components';

export const linkVariants = cva(linkTokens.base, {
  variants: {
    variant: linkTokens.variant,
    layout: linkTokens.layout,
    height: linkTokens.height,
    width: linkTokens.width,
    padding: linkTokens.padding,
    paddingX: linkTokens.paddingX,
    textSize: linkTokens.textSize,
    border: linkTokens.border,
    radius: linkTokens.radius,

    active: {
      true: '',
      false: '',
    },
  },

  defaultVariants: {
    variant: 'default',
    layout: 'inline',
    active: false,
    height: 'md',
    width: 'auto',
    padding: 'md',
    textSize: 'base',
    border: 'default',
    radius: 'md',
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
