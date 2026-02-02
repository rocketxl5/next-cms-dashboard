import { cva, type VariantProps } from 'class-variance-authority';
import { buttonTokens } from '../tokens/components/button-tokens';

export const buttonVariants = cva('px-4 py-2 rounded-md font-medium', {
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
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

    // default: 'bg-blue-600 text-slate-50',
    //   destructive: 'bg-red-600 text-slate-50',