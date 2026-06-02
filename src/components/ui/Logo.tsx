import { Link } from './Link';
import { Zap } from 'lucide-react';

import { cn } from '@/lib/utils/cn';
import { type LinkVariants } from '@/lib/ui/variants';

type ZapLogoProps = LinkVariants & {
  className?: string;
  color?: string;
  size?: number;
  stroke?: number;
};

export function ZapLogo({
  className,
  color = 'foreground',
  size = 24,
  stroke = 0.1,
}: ZapLogoProps) {
  const iconSize = Math.round(size * 0.6);

  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="inline-flex"
      padding="none"
    >
      <div
        className={cn(
          'inline-flex items-center justify-center rounded-full border-2',
          color,
          className,
        )}
        style={{
          width: size,
          height: size,
          backgroundColor: `hsl(var(--${color}))`,
          borderColor: `hsl(var(--foreground))`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          <Zap
            size={iconSize}
            strokeWidth={stroke}
            className="block"
            style={{
              stroke: 'hsl(var(--foreground))',
              fill: 'hsl(var(--background))',
            }}
          />
        </div>
      </div>
    </Link>
  );
}
