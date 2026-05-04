import { ReactNode } from 'react';

import { Box } from './layout';
import { Label } from './Label';

import {
  type LabelVariants,
} from '@/lib/ui/variants/label.variants';
import { sizeAdapters } from '@/lib/ui/tokens/adapters/layout';
import { type BoxVariants } from '@/lib/ui/variants';
import { surface } from '@/lib/ui/tokens';

interface FieldGroupProps extends BoxVariants {
  children: ReactNode;
  label?: ReactNode;
  htmlFor?: string;

  inline?: boolean;
  spacing?: keyof typeof sizeAdapters.gap;
  labelVariant?: LabelVariants['variant'];

  required?: boolean;
  disabled?: boolean;

  className?: string;
}

export function FieldGroup({
  children,
  label,
  htmlFor,

  inline = false,
  labelVariant = 'default',
  spacing = 'xs',
  border = 'none',
  padding = 'none',

  required = false,
  disabled = false,

  className,
}: FieldGroupProps) {
  return (
    <Box
      className={className}
      layout={inline ? 'row' : 'col'}
      padding={padding}
      gap={spacing}
      border={border}
    >
      {label && (
        <Label
          htmlFor={htmlFor}
          variant={labelVariant}
          required={required}
          disabled={disabled}
        >
          {label}
        </Label>
      )}

      {children}
    </Box>
  );
}
