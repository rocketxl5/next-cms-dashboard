'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { Toast, ToastContextValue, AddToastInput } from '@/types/ui';

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const generateId = () => crypto.randomUUID();

  const removeToast = useCallback((toastId: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== toastId));
  }, []);

  const addToast = useCallback(
    ({ intent, emphasis, duration, ...rest }: AddToastInput) => {
      const id = generateId();

      const newToast: Toast = {
        id,
        ...rest,
        intent: intent ?? 'info',
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

  return context;
}
