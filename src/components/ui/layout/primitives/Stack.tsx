import { layoutAdapters } from '@/lib/ui/tokens';

const { flexAlign, flexDirection, flexJustify, spaceGap } = layoutAdapters;

type AlignKey = keyof typeof flexAlign;
type JustifyKey = keyof typeof flexJustify;
type DirectionKey = keyof typeof flexDirection;
type GapKey = keyof typeof spaceGap;

type StackProps = {
  children: React.ReactNode;
  className?: string;
  align?: AlignKey;
  justify?: JustifyKey;
  gap?: GapKey;
  direction?: DirectionKey;
  wrap?: boolean;
};

export function Stack({
  children,
  align,
  gap,
  justify,
  direction = 'col',
  wrap = false,
  className = '',
}: StackProps) {
  return (
    <div
      className={[
        'flex',

        flexDirection[direction],
        align ? flexAlign[align] : '',
        gap ? spaceGap[gap] : '',
        justify ? flexJustify[justify] : '',
        wrap ? 'flex-wrap' : '',

        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
