import { LucideIcon } from 'lucide-react';
import { Capability } from '../../lib/permissions/model/capabilities';

export type NavItem = {
  label: string;
  href: string;
  capability: Capability;

  icon?: LucideIcon;

  /**
   * Optional nested routes considered active
   */
  activeRoutes?: string[];
};
