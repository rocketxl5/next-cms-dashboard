import { CurrentDashboardUser } from '../shared';

export type TableContext<TMeta = unknown> = {
  currentUser: CurrentDashboardUser;
  // table-level state
  meta?: TMeta;

  // optional shared helpers
  isSelected?: (id: string) => boolean;
  toggleSelect?: (id: string) => void;
};
