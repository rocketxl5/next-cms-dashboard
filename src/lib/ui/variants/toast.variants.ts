import { cva, type VariantProps } from 'class-variance-authority';
import { toastTokens } from '../tokens/components/toast.tokens';
import { surfaceAdapters } from '../tokens';

export const toastVariants = cva(toastTokens.base, {
  variants: {
    intent: toastTokens.intent,
    emphasis: toastTokens.emphasis,
  },

  compoundVariants: [
    {
      intent: 'success',
      emphasis: 'solid',
      class: surfaceAdapters.solid.success,
    },
    {
      intent: 'success',
      emphasis: 'subtle',
      class: surfaceAdapters.subtle.success,
    },

    {
      intent: 'destructive',
      emphasis: 'subtle',
      class: surfaceAdapters.subtle.destructive,
    },

    {
      intent: 'info',
      emphasis: 'subtle',
      class: surfaceAdapters.subtle.info,
    },

    {
      intent: 'default',
      emphasis: 'subtle',
      class: surfaceAdapters.subtle.default,
    },

    {
      intent: 'muted',
      emphasis: 'subtle',
      class: surfaceAdapters.subtle.muted,
    },
  ],

  defaultVariants: {
    intent: 'info',
    emphasis: 'subtle',
  },
});

export type ToastVariants = VariantProps<typeof toastVariants>;
