import { layoutAdapters } from '@/lib/ui/tokens';

const { spaceGap, gridColumns } = layoutAdapters;

type GridColumnKey = keyof typeof gridColumns;
type GapKey = keyof typeof spaceGap;

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
    <div className={['grid', gridColumns[cols], spaceGap[gap], className].join(' ')}>
      {children}
    </div>
  );
}
