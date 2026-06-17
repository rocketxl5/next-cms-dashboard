import { inputTokens } from '../tokens/components';
import { focusAdapters } from '../tokens';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const inputVariants = cva(inputTokens.base, {
  variants: {
    variant: {
      default: cn(inputTokens.variant.default, focusAdapters.default),

      subtle: cn(inputTokens.variant.subtle, focusAdapters.default),

      ghost: cn(inputTokens.variant.ghost, focusAdapters.default),

      error: cn(inputTokens.variant.error, focusAdapters.destructive),

      success: cn(inputTokens.variant.success, focusAdapters.success),
    },

    layout: inputTokens.layout,
    height: inputTokens.height,
    paddingX: inputTokens.paddingX,
    paddingY: inputTokens.paddingY,
    border: inputTokens.border,
  },

  defaultVariants: {
    variant: 'default',
    height: 'lg',
    paddingX: 'md',
    paddingY: 'sm',
    layout: 'block',
    border: 'default',
  },
});

export type InputVariants = VariantProps<typeof inputVariants>;
