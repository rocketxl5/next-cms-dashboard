import { Capability } from '../../lib/permissions/model/capabilities';

import { NavIcon } from '@/lib/ui/navigation/nav-icons';

export type NavItem = {
  label: string;
  href: string;
  capability: Capability;

  icon?: NavIcon;

  /**
   * Optional nested routes considered active
   */
  activeRoutes?: string[];

  children?: NavItem[];
};
