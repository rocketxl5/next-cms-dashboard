import { cva, type VariantProps } from 'class-variance-authority';
import { inputTokens } from '../tokens/components/input.tokens';

export const inputVariants = cva(inputTokens.base, {
  variants: {
    variant: inputTokens.variant,
    layout: inputTokens.layout,
    height: inputTokens.height,
    padding: inputTokens.padding,
    border: inputTokens.border,
  },

  defaultVariants: {
    variant: 'default',
    height: 'md',
    padding: 'md',
    layout: 'block',
    border: 'default',
  },
});

export type InputVariants = VariantProps<typeof inputVariants>;
