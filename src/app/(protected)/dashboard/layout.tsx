// app/(protected)/admin/layout.tsx
import { AppShell, SideSlot, HeaderSlot, MainSlot } from "@/layout-primitives";
import { DashboardHeader, DashboardSidebar } from "./components";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function DashboardLayout({children}: RootLayoutProps) {
  return (
    <AppShell>
     <SideSlot>
        <DashboardSidebar />
     </SideSlot>
     <div className="flex flex-col flex-1 overflow-hidden">
        <HeaderSlot>
            <DashboardHeader />
        </HeaderSlot>
        <MainSlot>
          {children}
        </MainSlot>
     </div>
  </AppShell>
  )
}
