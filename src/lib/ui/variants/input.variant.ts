import { cva, type VariantProps } from 'class-variance-authority';
import { inputTokens } from '../tokens/components/input.tokens';

export const inputVariants = cva(inputTokens.base, {
  variants: {
    variant: inputTokens.variant,
    border: inputTokens.border,
    size: inputTokens.size,
    layout: inputTokens.layout,
  },

  defaultVariants: {
    size: 'md',
    layout: 'block',
    border: 'default',
  },
});

export type InputVariants = VariantProps<typeof inputVariants>;
