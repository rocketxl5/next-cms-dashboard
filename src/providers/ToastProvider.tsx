'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { Toast } from '@/types/ui/toast';

type ToastContextValue = {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (toastId: number) => void;
};

let id = 0;

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const generateId = () => id++;

  const removeToast = useCallback((toastId: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== toastId));
  }, []);

  const addToast = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const newToast: Toast = {
        id: generateId(),
        ...toast,
      };

      setToasts((prev) => [newToast, ...prev]);

      if (!toast.persistent) {
        setTimeout(() => {
          removeToast(newToast.id);
        }, toast.duration ?? 3000);
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
