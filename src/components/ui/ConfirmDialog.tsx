import { Box } from './layout';
import { Button } from './button';
import { Title } from './Title';

type ConfirmDialogProps = {
  title: string;
  description?: string;
  context?: React.ReactNode;

  confirmLabel?: string;
  cancelLabel?: string;

  variant?: string;

  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmDialog({
  title,
  description,
  context,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'default',
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <Box
      position="fixed"
      justify="center"
      padding="md"
      className="bg-overlay inset-0 z-50"
    >
      <div className="bg-raised w-full max-w-md rounded-xl p-4 shadow-xl">
        <div className="space-y-2">
          <Title as="h2">{title}</Title>

          {description ? (
            <p className="text-muted-foreground text-sm">{description}</p>
          ) : null}
        </div>

        {context ? (
          <div className="bg-background rounded-lg py-3 text-sm">{context}</div>
        ) : null}
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="warning" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button
            variant={variant === 'destructive' ? variant : 'default'}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </Box>
  );
}
