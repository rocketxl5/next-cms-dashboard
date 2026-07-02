type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen w-full min-w-93 flex flex-col">{children}</div>
  );
}
