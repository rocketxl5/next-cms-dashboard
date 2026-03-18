import { layoutAdapters } from '@/lib/ui/tokens';

type WidthKey = keyof typeof layoutAdapters.width;

type BoxProps = {
  children: React.ReactNode;
  className?: string;
  width?: WidthKey;
  grow?: boolean;
};

export function Box({
  children,
  width,
  grow = false,
  className = '',
}: BoxProps) {
  return (
    <div
      className={[
        width ? layoutAdapters.width[width] : '',
        grow ? 'flex-1 min-w-0' : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
