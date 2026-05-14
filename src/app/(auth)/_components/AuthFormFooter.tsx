import { Box } from '@/components/ui';

type FormHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export function AuthFormFooter({ children, className }: FormHeaderProps) {
  return (
    <Box direction="col" width="full" className={className}>
      {children}
    </Box>
  );
}