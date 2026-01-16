// app/(protected)/user/layout.tsx
import { requireRole } from '@/lib/server/requireRole';
import { Role } from '@prisma/client';

type RootLayoutProps = {
  children: React.ReactNode;
};

// Protected Layout for Auth Users
export default async function UserLayout(props: RootLayoutProps) {
  await requireRole({ roles: [Role.USER], forbiddenRedirect: '/admin' });

  return <div>Dashboard Users Layout</div>;
}
