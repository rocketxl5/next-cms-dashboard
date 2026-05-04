import { cloneElement, isValidElement, ReactElement, ReactNode } from "react";

import { Button } from "../button";

import { useCollapsible } from "@/hooks";

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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggle();
    onClick?.(e);
  };

  if (asChild && isValidElement(children)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return cloneElement(children as ReactElement<any>, {
      onClick: handleClick,
      'data-state': open ? 'open' : 'closed',
    });
  }

  return (
    <Button {...props} data-state={open ? 'open' : 'closed'} onClick={handleClick}>{children}</Button>
  )
}