import { CurrentDashboardUser } from '../shared';

export type TableContext<TMeta = unknown> = {
  currentUser: CurrentDashboardUser;
  // optional table-level state
  meta?: TMeta;
};
