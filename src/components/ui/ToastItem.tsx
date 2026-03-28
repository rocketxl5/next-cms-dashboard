import { Button } from './button';
import { cn } from '@/lib/utils';
import { Toast } from '@/types/ui';
import { toastVariants } from '@/lib/ui/variants/toast.variants';
import { X } from 'lucide-react';

type ItemProps = {
  toast: Toast;
  onClose: (id: number) => void;
};

export function ToastItem({ toast, onClose }: ItemProps) {
  return (
    <div
      className={cn(
        toastVariants({
          intent: toast.intent ?? 'info',
          emphasis: toast.emphasis ?? 'subtle',
        }),
        'animate-in fade-in slide-in-from-top-2 dureation-200',
      )}
    >
      <div className="flex-1">
        {toast.title && (
          <div className="font-medium leading-none-mb-0 5">{toast.title}</div>
        )}
      </div>

      <div className="opacity-90">{toast.message}</div>

      {toast.action && (
        <Button onClick={toast.action.onClick}>{toast.action.label}</Button>
      )}

      <Button onClick={() => onClose(toast.id)}>
        <X size={14} />
      </Button>

      {!toast.persistent && (
        <div
          className="absolute bottom-0 left-0 h-0-5 bg-current/30"
          style={{
            width: '100%',
            animation: `toast-progress ${
              toast.duration || 3000
            }ms linear forwards`,
          }}
        ></div>
      )}
    </div>
  );
}
