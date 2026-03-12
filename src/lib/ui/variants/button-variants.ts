import { cva, type VariantProps } from 'class-variance-authority';
import { buttonTokens } from '../tokens/components/button.tokens';

export const buttonVariants = cva(buttonTokens.base, {
  variants: {
    variant: {
      default: buttonTokens.default.base,
      destructive: buttonTokens.destructive.base,
    },
    size: buttonTokens.size,
    radius: buttonTokens.radius,
    layout: buttonTokens.layout,
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    radius: 'md',
    layout: 'inline',
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
