import { flex, sizeAdapters } from '@/lib/ui/tokens/adapters/layout';

type AlignKey = keyof typeof flex.align;
type JustifyKey = keyof typeof flex.justify;
type DirectionKey = keyof typeof flex.direction;
type GapKey = keyof typeof sizeAdapters.gap;
type WidthKey = keyof typeof sizeAdapters.width;

type StackProps = {
  children: React.ReactNode;
  className?: string;
  align?: AlignKey;
  justify?: JustifyKey;
  gap?: GapKey;
  direction?: DirectionKey;
  width?: WidthKey;
  wrap?: boolean;
};

export function Stack({
  children,
  align,
  gap,
  justify,
  direction = 'col',
  width,
  wrap = false,
  className = '',
}: StackProps) {
  return (
    <div
      className={[
        'flex',

        flex.direction[direction],
        align ? flex.align[align] : '',
        gap ? sizeAdapters.gap[gap] : '',
        justify ? flex.justify[justify] : '',
        width ? sizeAdapters.width[width] : '',
        wrap ? 'flex-wrap' : '',

        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
