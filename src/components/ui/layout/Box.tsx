import { layoutAdapters } from '@/lib/ui/tokens';

type WidthKey = keyof typeof layoutAdapters.elementWidth;
// type FlexAlignKey = keyof typeof layoutAdapters.flexAdapters.align;
// type FlexJustifyKey = keyof typeof layoutAdapters.flexAdapters.justify;
// type FlexDirectionKey = keyof typeof layoutAdapters.flexAdapters.direction;

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
        width ? layoutAdapters.elementWidth[width] : '',
        grow ? layoutAdapters.elementWidth.grow : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
