'use client';

import { useState } from 'react';

import { Button } from './button';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { toastVariants } from '@/lib/ui/variants/toast.variants';

import { ToastItem } from '@/types/ui';

type ToastProps = {
  toast: ToastItem;
  onClose: (id: string) => void;
};

export function Toast({ toast, onClose }: ToastProps) {
  const [isLeaving, setIsLeaving] = useState(true);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => onClose(toast.id), 200); // match duration-200
  };

  return (
    <div
      className={cn(
        toastVariants({
          variant: toast.variant,
          emphasis: toast.emphasis,
        }),
        'transition-all duration-200',
        'opacity-0 -translate-y-2 animate-[toast-in_200ms_ease-out_forwards]',
        isLeaving &&
          'opacity-0 translate-y-2 animate-[toast-out_200ms_ease-out_forwards]',
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 space-y-1">
          {toast.title && (
            <div className="font-medium leading-none">{toast.title}</div>
          )}

          <div className="text-sm opacity-90">{toast.message}</div>
        </div>

        <div className="flex items-center gap-2">
          {toast.action && (
            <Button
              height="sm"
              width="square"
              className="no-underline hover:no-underline hover:bg-muted/50 px-2"
              onClick={toast.action.onClick}
            >
              {toast.action.label}
            </Button>
          )}

          <Button
            height="sm"
            width="square"
            className="bg-transparent border-none hover:bg-muted/50 p-1 h-auto"
            onClick={handleClose}
          >
            <X size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
}
