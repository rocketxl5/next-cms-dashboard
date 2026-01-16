// src/layout-primitives/SidebarSlot.tsx
type SideSlotProps = {
    children: React.ReactNode;
    className?: string;
}

export function SideSlot({children, className}: SideSlotProps) {
    return(
    <aside className={`hidden md:flex w-64 shrink-0 border-r ${className ?? ''}`}>{children}</aside>
    )
}