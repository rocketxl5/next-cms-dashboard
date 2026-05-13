import { ReactNode } from 'react';

import { Box } from '../layout';
import { Label } from '../Label';
import { ErrorMessage } from './ErrorMessage';

import { cn } from '@/lib/utils';

type FormGroupProps = {
  children: ReactNode;

  label?: ReactNode;
  labelAside?: ReactNode;
  htmlFor?: string;

  error?: string;
  description?: ReactNode;

  required?: boolean;

  className?: string;
  contentClassName?: string;
};

export function FormGroup({
  children,
  label,
  labelAside,
  htmlFor,
  error = '',
  description,
  required = false,
  className,
  contentClassName,
}: FormGroupProps) {
  return (
    <Box direction="col" gap="xs" className={className}>
      <div className="flex items-center justify-between w-full">
        {error ? (
          <ErrorMessage message={error} />
        ) : label ? (
          <Label htmlFor={htmlFor} required={required}>
            {label}
          </Label>
        ) : null}
        {labelAside}
      </div>
      <div className={cn('space-y-1 w-full', contentClassName)}>
        {children}

        {description ? (
          <p className="text-muted-foreground text-sm">{description}</p>
        ) : null}
      </div>
    </Box>
  );
}
