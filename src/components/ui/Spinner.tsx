'use client';

import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  spinnerVariants,
  SpinnerVariants,
} from '@/lib/ui/variants/spinner.variants';

type SpinnerProps = SpinnerVariants & {
  className?: string;
  size?: number;
};

export function Spinner({ size = 22, variant, className }: SpinnerProps) {
  return (
    <Loader2
      size={size}
      className={cn(spinnerVariants({ variant }), className)}
    />
  );
}