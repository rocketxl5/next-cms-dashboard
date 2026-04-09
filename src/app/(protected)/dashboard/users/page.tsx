import { RawSearchUsersParams } from '@/types/shared';
import UsersPage from './list/_server/UsersPage';

type PageProps = {
  searchParams?: RawSearchUsersParams;
};

export default function DashboardUsersPage({ searchParams }: PageProps) {
  return <UsersPage searchParams={searchParams} />;
}
