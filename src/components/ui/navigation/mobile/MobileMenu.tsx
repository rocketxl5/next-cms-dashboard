import { cn } from '@/lib/utils';

type MobileMenuProps = {
  open: boolean;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  onClose?: () => void;
};

export function MobileMenu({ open, items }: MobileMenuProps) {
  return (
    <ul
      className={cn(
        'fixed left-0 top-14 flex min-h-[calc(100vh-56px)] w-full flex-col bg-slate-100 transition-transform duration-200 ease-in-out lg:hidden',
        open ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="flex h-12 items-center border-b border-slate-200 px-6 text-xl font-light"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}