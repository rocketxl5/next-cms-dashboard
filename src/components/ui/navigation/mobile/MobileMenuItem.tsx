import { NavItem } from '@/types/ui';
import { Link } from '@/components/ui';

type MobileMenuItemProps = {
  item: NavItem;
  onClick?: () => void;
};

export function MobileMenuItem({
  item, onClick
}: MobileMenuItemProps) {
  return (
    <li>
      <Link
        href={item.href}
        width="full"
        variant='nav'
        padding='lg'
        radius='none'
        className="h-12 justify-start border-b border-subtle bg-base"
        onClick={onClick}
      >
        {item.label}
      </Link>
    </li>
  );
}