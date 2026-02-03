'use client';

import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import { linkVariants, type LinkVariants } from '@/lib/ui/variants';
import { cn } from '@/lib/utils/cn';

export interface LinkProps extends Omit<NextLinkProps, 'className'>, LinkVariants {
    children: React.ReactNode;
    className?: string;
}
export function Link({
    href,
    variant,
    size,
    layout,
    className,
    children,
    ...props
}: LinkProps) {
    return (
        <NextLink href={href}
        className={cn(linkVariants({variant, size, layout}), className)} {...props}>
            {children}
        </NextLink>
    )
}