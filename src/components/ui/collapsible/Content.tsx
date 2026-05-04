import { useCollapsible } from "@/hooks";

import { cn } from "@/lib/utils";

type ContentProps = {
    children: React.ReactNode;
    className?: string;
}

export function Content({children, className}: ContentProps) {
    const {open} = useCollapsible();

    return (
    <div
      data-state={open ? 'open' : 'closed'}
      className={cn(
        'overflow-hidden transition-all duration-200',
        open ? 'max-h-125 opacity-100 mt-2' : 'max-h-0 opacity-0',
        className
      )}
    >
      <div>{children}</div>
    </div>
  );
}