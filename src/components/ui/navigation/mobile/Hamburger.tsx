import { cn } from '@/lib/utils';

type HamburgerProps = {
  open: boolean;
  onClick: () => void;
};

export function Hamburger({ open, onClick }: HamburgerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      className="relative flex size-10 items-center justify-center"
    >
      <span
        className={cn(
          'absolute h-0.5 w-6 rounded-full bg-current transition-transform duration-200 ease-in-out',
          open ? 'rotate-45' : '-translate-y-2',
        )}
      />

      <span
        className={cn(
          'absolute h-0.5 w-6 rounded-full bg-current transition-opacity duration-150 ease-in-out',
          open ? 'opacity-0' : 'opacity-100',
        )}
      />

      <span
        className={cn(
          'absolute h-0.5 w-6 rounded-full bg-current transition-transform duration-200 ease-in-out',
          open ? '-rotate-45' : 'translate-y-2',
        )}
      />
    </button>
  );
}
