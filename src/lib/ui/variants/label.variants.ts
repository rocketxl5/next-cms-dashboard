import { cva, type VariantProps } from 'class-variance-authority';
import { labelTokens } from '../tokens/components/label.tokens';

export const labelVariants = cva(labelTokens.base, {
  variants: {
    variant: labelTokens.variant,
    state: labelTokens.state,
  },

  defaultVariants: {
    variant: 'default',
    state: 'enabled',
  },
});

export type LabelVariants = VariantProps<typeof labelVariants>;