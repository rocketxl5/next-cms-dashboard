import { cn } from "@/lib/utils";

type HamburgerProps = {
  open: boolean;
  onClick: () => void;
};

export function Hamburger({ open, onClick }: HamburgerProps) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      className="relative flex size-10 items-center justify-center"
    >
      <span
        className={cn(
          'absolute h-0.5 w-6 bg-current transition-all duration-200',
          open ? 'rotate-45' : '-translate-y-2'
        )}
      />

      <span
        className={cn(
          'absolute h-0.5 w-6 bg-current transition-all duration-200',
          open ? 'opacity-0' : 'opacity-100'
        )}
      />

      <span
        className={cn(
          'absolute h-0.5 w-6 bg-current transition-all duration-200',
          open ? '-rotate-45' : 'translate-y-2'
        )}
      />
    </button>
  );
}