//src/layout-primitives/AppShell.tsx
type AppShellProps = {
    children: React.ReactNode;
}

export function AppShell({children}: AppShellProps) {
    return (
        <div className="h-screen w-full overflow-hidden flex">
            {children}
        </div>
    )
}