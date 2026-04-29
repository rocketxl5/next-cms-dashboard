import { grid, sizeAdapters } from '@/lib/ui/tokens/adapters/layout';

type GridColumnKey = keyof typeof grid.columns;
type GapKey = keyof typeof sizeAdapters.gap;

type GridProps = {
  children: React.ReactNode;
  className?: string;
  cols?: GridColumnKey;
  gap?: GapKey;
};

export function Grid({
  children,
  cols = '2',
  gap = 'md',
  className,
}: GridProps) {
  return (
    <div
      className={[
        'grid',
        grid.columns[cols],
        sizeAdapters.gap[gap],
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
