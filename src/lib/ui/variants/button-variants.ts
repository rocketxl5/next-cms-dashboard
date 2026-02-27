import { cva, type VariantProps } from 'class-variance-authority';
import { buttonTokens } from '../tokens/components/button-tokens';

export const buttonVariants = cva(
   "px-4 py-2 rounded-md font-medium transition-opacity disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: buttonTokens.default.base,
        destructive: buttonTokens.destructive.base,
      },
      size: buttonTokens.size,
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
