// src/layout-primitives/MainSection.tsx
type MainSlotProps = {
    children: React.ReactNode;
}

export function MainSlot({children}: MainSlotProps) {
    return (
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
    )
}