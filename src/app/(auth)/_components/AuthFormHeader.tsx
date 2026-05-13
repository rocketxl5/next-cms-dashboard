import { Box } from '@/components/ui';

import { cn } from '@/lib/utils';

type FormHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export function AuthFormHeader({ children, className }: FormHeaderProps) {
  return (
    <Box direction="col" gap="lg" className={cn(className, 'mb-6')}>
      {children}
    </Box>
  );
}
