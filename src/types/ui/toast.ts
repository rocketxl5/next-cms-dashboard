import { toastTokens } from '@/lib/ui/tokens/components/toast.tokens';

export type ToastIntent = keyof typeof toastTokens.intent;

export type ToastEmphasis = keyof typeof toastTokens.emphasis;

export type ToastAction = {
  label: string;
  onClick: () => void;
};

export type Toast = {
  id: number;
  title?: string;
  message: string;
  duration: number;
  persistent?: boolean;
  action?: ToastAction;
  emphasis?: ToastEmphasis;
  intent?: ToastIntent;
};
