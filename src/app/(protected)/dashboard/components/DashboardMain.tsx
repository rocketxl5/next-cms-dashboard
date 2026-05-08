'use client';

interface DashboardMainProps {
  children: React.ReactNode;
}

export function DashboardMain({ children }: DashboardMainProps) {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="h-full overflow-y-auto">{children}</div>
    </main>
  );
}
