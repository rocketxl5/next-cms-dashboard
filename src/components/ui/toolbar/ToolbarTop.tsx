import { Box } from "../layout";

type ToolbarTopProps = {
  children: React.ReactNode;
  className?: string;
}
export function ToolbarTop({children, className}: ToolbarTopProps) {
  return (
    <Box
      className={[
        'flex items-center justify-between gap-4', // horizontal layout with vertical alignment
        className
      ].filter(Boolean).join(' ')}
    >{children}</Box>
  );
}
