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
          'transition-all duration-200',
          open ? 'opacity-100 mt-1' : 'opacity-0 pointer-events-none',
          className,
        )}
      >
        <div>{children}</div>
      </div>
    );
}