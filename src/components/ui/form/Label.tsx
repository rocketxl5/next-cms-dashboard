import { cn } from '@/lib/utils';
import {
  labelVariants,
  type LabelVariants,
} from '@/lib/ui/variants/label.variants';

interface LabelProps extends LabelVariants {
  htmlFor?: string;
  children: React.ReactNode;

  required?: boolean;
  disabled?: boolean;

  className?: string;
}

export function Label({
  htmlFor,
  children,
  required = false,
  disabled = false,
  variant = 'default',
  className,
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        labelVariants({ variant, state: !disabled ? 'enabled' : 'disabled' }),
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      <span className="inline-flex items-center gap-1">
        {children}
        {required && <span className="text-destructive">*</span>}
      </span>
    </label>
  );
}
