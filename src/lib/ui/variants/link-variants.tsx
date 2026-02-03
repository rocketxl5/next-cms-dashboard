import { cva, type VariantProps } from 'class-variance-authority';
import { linkTokens } from '../tokens/components/link-tokens';

export const linkVariants = cva(
  'font-medium transition-colors inline-flex items-center',
  {
    variants: {
      variant: {
        default: linkTokens.default.base,
        primary: linkTokens.primary.base,
        nav: linkTokens.nav.base,
      },
      size: linkTokens.size,
      layout: linkTokens.layout,
      active: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      layout: 'inline',
      active: false,
    },
    compoundVariants: [
      {
        variant: 'nav',
        active: true,
        className: 'bg-muted font-medium',
      },
    ],
  },
);

export type LinkVariants = VariantProps<typeof linkVariants>;
