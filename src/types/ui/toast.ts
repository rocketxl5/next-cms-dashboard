import { toastTokens } from '@/lib/ui/tokens';

export type ToastEmphasis = keyof typeof toastTokens.emphasis;

export type TaostVariant = keyof typeof toastTokens.variant;

export type AddToastInput = {
  message: string;
  title?: string;
} & Partial<Omit<ToastItem, 'id' | 'message' | 'title'>>;

export type ToastContextValue = {
  toasts: ToastItem[];
  addToast: (toast: AddToastInput) => void;
  removeToast: (toastId: string) => void;
};

export type ToastAction = {
  label: string;
  onClick: () => void;
};

export type ToastItem = {
  id: string;
  title?: string;
  message: string;
  duration: number;
  persistent?: boolean;
  action?: ToastAction;
  variant: TaostVariant;
  emphasis: ToastEmphasis;
};
