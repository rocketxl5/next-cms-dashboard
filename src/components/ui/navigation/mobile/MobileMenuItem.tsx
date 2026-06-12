import { Link } from '@/components/ui';

import { navIconMap } from '@/lib/ui/navigation/nav-icons';

import { NavItem } from '@/types/ui';

type MobileMenuItemProps = {
  item: NavItem;
  onClick?: () => void;
};

export function MobileMenuItem({ item, onClick }: MobileMenuItemProps) {
  const Icon = item.icon ? navIconMap[item.icon] : null;

  return (
    <li>
      <Link
        href={item.href}
        width="full"
        variant="nav"
        padding="lg"
        radius="none"
        className="h-12 justify-start gap-2 border-b border-subtle bg-base"
        onClick={onClick}
      >
        {Icon && <Icon size={18} />}
        {item.label}
      </Link>
    </li>
  );
}
