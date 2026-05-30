'use client';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { linkVariants, type LinkVariants } from '@/lib/ui/variants';
import { cn } from '@/lib/utils/cn';

type LinkProps = React.ComponentProps<typeof NextLink> &
  LinkVariants & {
    children: React.ReactNode;
    className?: string;
  };

export function Link({
  href,
  variant,
  disabled,
  layout,
  active,
  height,
  width,
  padding,
  textSize,
  border,
  radius,
  className,
  children,
  ...props
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={cn(
        linkVariants({
          variant,
          disabled,
          layout,
          height,
          width,
          padding,
          textSize,
          active,
          border,
          radius,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}