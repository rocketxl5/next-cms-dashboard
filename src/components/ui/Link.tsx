'use client';

import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import { linkVariants, type LinkVariants } from '@/lib/ui/variants';
import { cn } from '@/lib/utils/cn';

interface LinkProps extends Omit<NextLinkProps, 'className'>, LinkVariants {
    children: React.ReactNode;
    className?: string;
};

export function Link({
  href,
  variant,
  border,
  size,
  layout,
  radius,
  active,
  className,
  children,
  ...props
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={cn(
        linkVariants({ variant, border, size, layout, radius, active }),
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}