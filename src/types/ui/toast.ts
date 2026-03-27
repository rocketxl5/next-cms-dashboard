import { toastTokens } from '@/lib/ui/tokens/components/toast.tokens';

// export type ToastIntent = 'success' | 'error' | 'warning' | 'info';
export type ToastIntent = keyof typeof toastTokens.intent;

export type ToastAction = {
  label: string;
  onClick: () => void;
};

export type Toast = {
  id: number;
  intent?: ToastIntent;
  title?: string;
  message: string;
  duration: number;
  persistent?: boolean;
  action?: ToastAction;
};
