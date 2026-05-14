import { forwardRef } from 'react';

import { cn } from '@/lib/utils/cn';

const dividerVariants = {
  orientation: {
    horizontal: {
      tone: 'h-px w-full',
      border: 'w-full',
    },

    vertical: {
      tone: 'h-full w-px self-stretch',
      border: 'h-full self-stretch',
    },
  },

  tone: {
    default: 'border',
    subtle: 'border-subtle',
    strong: 'border-strong',
  },

  border: {
    none: '',
    default: 'border',
    subtle: 'border-subtle',
    strong: 'border-strong',
  },

   spacing: {
    none: '',
    sm: 'my-2 mx-2',
    md: 'my-4 mx-4',
    lg: 'my-6 mx-6',
  },
};

type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: keyof typeof dividerVariants.orientation;
  tone?: keyof typeof dividerVariants.tone;

  /**
   * Adds a border instead of a background fill.
   * Useful for hairline separators.
   */
  border?: keyof typeof dividerVariants.border;

  spacing?: keyof typeof dividerVariants.spacing;
};

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      orientation = 'horizontal',
      tone = 'default',
      border = 'none',
      spacing = 'md',
      ...props
    },
    ref,
  ) => {
    const isHorizontal = orientation === 'horizontal';
    const hasBorder = border !== 'none';

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(
          'shrink-0',

           hasBorder
      ? dividerVariants.orientation[orientation].border
      : dividerVariants.orientation[orientation].tone,

    hasBorder
      ? [
          'bg-transparent',
          orientation === 'horizontal'
            ? 'border-t'
            : 'border-l',

          dividerVariants.border[border],
        ]
      : dividerVariants.tone[tone],
          isHorizontal
            ? {
                none: '',
                sm: 'my-2',
                md: 'my-4',
                lg: 'my-6',
              }[spacing]
            : {
                none: '',
                sm: 'mx-2',
                md: 'mx-4',
                lg: 'mx-6',
              }[spacing],

          className,
        )}
        {...props}
      />
    );
  },
);

Divider.displayName = 'Divider';
