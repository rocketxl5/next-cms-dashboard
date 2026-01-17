// src/layout-primitives/ContentColumn.tsx
type ColumnSlotProps = {
    children: React.ReactNode;
}
export function ColumnSlot({children}: ColumnSlotProps) {
    return (
        <div className="flex flex-col flex-1 overflow-hidden">{children}</div>
    )
}