import { Capability } from '../../lib/permissions/model/capabilities';

export type DashboardNavItem = {
  label: string;
  href: string;
  capability: Capability;
};
