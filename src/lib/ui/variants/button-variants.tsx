import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva('px-4 py-2 rounded-md font-medium', {
  variants: {
    variant: {
      default: 'bg-blue-600 text-slate-50',
      destructive: 'bg-red-600 text-slate-50',
    },
    size: {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3 text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;