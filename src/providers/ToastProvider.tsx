'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { ToastItem, ToastContextValue, AddToastInput } from '@/types/ui';

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const generateId = () => crypto.randomUUID();

  const removeToast = useCallback((toastId: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== toastId));
  }, []);

  const addToast = useCallback(
    ({ variant, emphasis, duration, ...rest }: AddToastInput) => {
      const id = generateId();

      const newToast: ToastItem = {
        id,
        ...rest,
        variant: variant ?? 'default',
        emphasis: emphasis ?? 'subtle',
        duration: duration ?? 3000,
      };

      setToasts((prev) => [newToast, ...prev]);

      if (!newToast.persistent) {
        setTimeout(() => {
          removeToast(newToast.id);
        }, newToast.duration);
      }
    },
    [removeToast],
  );

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }

  const { addToast } = context;

  return {
    ...context,

    success: (input: Omit<AddToastInput, 'variant'>) =>
      addToast({ ...input, variant: 'success' }),

    destructive: (input: Omit<AddToastInput, 'variant'>) =>
      addToast({ ...input, variant: 'destructive' }),

    info: (input: Omit<AddToastInput, 'variant'>) =>
      addToast({ ...input, variant: 'info' }),

    warning: (input: Omit<AddToastInput, 'variant'>) =>
      addToast({ ...input, variant: 'warning' }),

    default: (input: Omit<AddToastInput, 'variant'>) =>
      addToast({ ...input, variant: 'default' }),
  };
}
