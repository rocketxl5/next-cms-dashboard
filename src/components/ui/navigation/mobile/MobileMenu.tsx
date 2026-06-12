import { cn } from '@/lib/utils';

import { NavItem } from '@/types/ui';

import { MobileMenuItem } from './MobileMenuItem';

type MobileMenuProps = {
  open: boolean;
  navItems: NavItem[];
  closeMenu?: () => void;
};

export function MobileMenu({ open, closeMenu, navItems }: MobileMenuProps) {
  return (
    <ul
      className={cn(
        'fixed left-0 top-14 flex min-h-screen w-full flex-col transition-transform duration-200 ease-in-out lg:hidden z-20 bg-base border-t border-subtle',
        open ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      {navItems.map((item) => (
        <MobileMenuItem key={item.href} item={item} onClick={closeMenu} />
      ))}
    </ul>
  );
}
