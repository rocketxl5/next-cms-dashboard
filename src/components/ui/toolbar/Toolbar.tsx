import { Box } from '../layout';

type ToolbarProps = {
  children: React.ReactNode;
  className?: string;
};

export function Toolbar({ children, className }: ToolbarProps) {
  return (
    <Box
      className={[
        'flex flex-col gap-4', // vertical stacking with spacing
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Box>
  );
}
