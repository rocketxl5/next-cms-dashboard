import { cva, type VariantProps } from 'class-variance-authority';
import { spinnerTokens } from '../tokens/components/spinner.tokens';

export const spinnerVariants = cva(spinnerTokens.base, {
  variants: {
    variant: spinnerTokens.variant,
  },

  defaultVariants: {
    variant: 'default',
  },
});

export type SpinnerVariants = VariantProps<typeof spinnerVariants>;