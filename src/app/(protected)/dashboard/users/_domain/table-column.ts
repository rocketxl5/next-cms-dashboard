import { CurrentDashboardUser } from '@/types/shared';

export type TableColumn<Row, CurrentUserType = CurrentDashboardUser> = {
  key: string;
  header: string;
  render: (user: Row, currentUser: CurrentUserType) => React.ReactNode;
  align?: 'left' | 'right' | 'center';
};
