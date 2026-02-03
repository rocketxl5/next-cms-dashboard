type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function ProtectedLayout({ children }: RootLayoutProps) {
  return <>{children}</>;
}
