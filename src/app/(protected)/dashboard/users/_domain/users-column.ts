// users/_domain/users-column.ts
import { TableColumn } from './table-column';

/**
 * UsersColumn
 * -----------
 * A column definition for any users table.
 *
 * Generic on the row type so it can support:
 * - full domain users (UserRow)
 * - dashboard users (DashboardUserRow)
 * - future projections
 */
export type UsersColumn<Row> = TableColumn<Row>;
