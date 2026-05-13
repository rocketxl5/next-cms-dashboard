import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

type ZapLogoProps = {
  className?: string;
  size?: number;
};

export function ZapLogo({
  className,
  size = 20,
}: ZapLogoProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-full aspect-square w-16 border-2',
        className
      )}
      style={{
        width: size,
        height: size,

        // inverse adaptive background
        backgroundColor: 'hsl(var(--foreground))',
        borderColor: 'hsl(var(--foreground))',
      }}
    >
      <Zap
        size={size * 0.7}
        strokeWidth={0.1}
        style={{
          // translucent outline
          stroke: 'hsl(var(--background))',

          // "cutout" interior using app background color
          fill: 'hsl(var(--background))',
        }}
      />
    </div>
  );
}