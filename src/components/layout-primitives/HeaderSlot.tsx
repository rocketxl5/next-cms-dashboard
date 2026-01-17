// src/layout-primitives/HeaderSlot.tsx
type HeaderSlotProps = {
    children: React.ReactNode;
}

export function HeaderSlot({children}: HeaderSlotProps) {
    return (
      <header className="h-14 shrink-0 border-b flex items-center justify-between px-4">
        {children}
      </header>
    );
}