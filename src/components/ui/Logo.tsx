import { Link } from './Link';
import { Zap } from 'lucide-react';

import { cn } from '@/lib/utils/cn';

type ZapLogoProps = {
  className?: string;
  size?: number;
};

export function ZapLogo({ className, size = 24 }: ZapLogoProps) {
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
          className,
        )}
        style={{
          width: size,
          height: size,
          backgroundColor: 'hsl(var(--foreground))',
          borderColor: 'hsl(var(--foreground))',
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          <Zap
            size={iconSize}
            strokeWidth={0.1}
            className="block"
            style={{
              stroke: 'hsl(var(--background))',
              fill: 'hsl(var(--background))',
            }}
          />
        </div>
      </div>
    </Link>
  );
}
