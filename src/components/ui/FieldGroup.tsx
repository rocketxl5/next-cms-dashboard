import { ReactNode } from 'react';

import { Box } from './layout';
import { Label } from './Label';

import {
  type LabelVariants,
} from '@/lib/ui/variants/label.variants';
import { sizeAdapters } from '@/lib/ui/tokens/adapters/layout';

type FieldGroupProps = {
  children: ReactNode;
  label?: ReactNode;
  htmlFor?: string;

  inline?: boolean;
  spacing?: keyof typeof sizeAdapters.gap;
  labelVariant?: LabelVariants['variant'];

  required?: boolean;
  disabled?: boolean;

  className?: string;
};

export function FieldGroup({
  children,
  label,
  htmlFor,

  inline = false,
  labelVariant = 'default',
  spacing = 'xs',

  required = false,
  disabled = false,

  className,
}: FieldGroupProps) {
  return (
    <Box layout={inline ? 'row' : 'col'} gap={spacing} className={className}>
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
