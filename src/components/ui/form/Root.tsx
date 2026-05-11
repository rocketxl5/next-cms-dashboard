import { FormHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
  containerClassName?: string;
};

export function Root({
  children,
  className,
  containerClassName,
  ...props
}: FormProps) {
  return (
    <form
      {...props}
      className={cn(
        'mx-auto w-full space-y-6 rounded-md border border-subtle p-6',
        className,
      )}
    >
      <div className={cn('space-y-4', containerClassName)}>{children}</div>
    </form>
  );
}
