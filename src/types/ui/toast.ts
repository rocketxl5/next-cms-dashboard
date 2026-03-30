import { toastTokens } from '@/lib/ui/tokens/components/toast.tokens';

export type ToastIntent = keyof typeof toastTokens.intent;

export type ToastEmphasis = keyof typeof toastTokens.emphasis;

export type AddToastInput = {
  message: string;
  title?: string;
} & Partial<Omit<Toast, 'id' | 'message' | 'title'>>;

export type ToastContextValue = {
  toasts: Toast[];
  addToast: (toast: AddToastInput) => void;
  removeToast: (toastId: string) => void;
};

export type ToastAction = {
  label: string;
  onClick: () => void;
};

export type Toast = {
  id: string;
  title?: string;
  message: string;
  duration: number;
  persistent?: boolean;
  action?: ToastAction;
  emphasis?: ToastEmphasis;
  intent?: ToastIntent;
};
