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

      dafautlVariants: {
        variant: 'default',
        size: 'md',
        layout: 'inline',
      },
    },
  },
);

export type LinkVariants = VariantProps<typeof linkVariants>;
