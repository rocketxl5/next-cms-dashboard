import { cloneElement, isValidElement, ReactElement, ReactNode } from 'react';

import { Button } from '../button';

import { useCollapsible } from '@/providers/hooks';
import { composeEventHandlers } from '@/lib/utils';

type TriggerProps = {
  children: ReactNode;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Trigger({
  children,
  asChild = false,
  onClick,
  ...props
}: TriggerProps) {
  const { open, toggle } = useCollapsible();

  const handleClick = composeEventHandlers(onClick, () => toggle());

  if (asChild && isValidElement(children)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const child = children as ReactElement<any>;

    return cloneElement(child, {
      'data-state': open ? 'open' : 'closed',
      onClick: composeEventHandlers(child.props?.onClick, handleClick),
    });
  }

  return (
    <Button
      {...props}
      data-state={open ? 'open' : 'closed'}
      onClick={composeEventHandlers(onClick, () => toggle())}
    >
      {children}
    </Button>
  );
}
