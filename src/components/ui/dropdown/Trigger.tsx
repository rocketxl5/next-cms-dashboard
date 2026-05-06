import { Button } from '../button';

import { useDropdown } from '@/providers/hooks';
import { composeEventHandlers } from '@/lib/utils';

import { ButtonVariants } from '@/lib/ui/variants';

type TriggerProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants;

export function Trigger({ children, onClick, ...props }: TriggerProps) {
  const { open, toggle, triggerRef } = useDropdown();

  const handleClick = composeEventHandlers(onClick, () => toggle());

  return (
    <Button
      ref={triggerRef as React.Ref<HTMLButtonElement>}
      variant="muted"
      data-state={open ? 'open' : 'closed'}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
}
