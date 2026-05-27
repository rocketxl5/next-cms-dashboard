import { Box } from './layout';
import { Button } from './button';
import { Title } from './Title';

type ConfirmDialogProps = {
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmDialog({
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'default',
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-zinc-900">
        <div className="space-y-2">
          <Title as="h2">{title}</Title>
          {description ? (
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="warning" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button
            variant={variant === 'danger' ? 'destructive' : 'default'}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
