type HeaderSlotProps = {
  children: React.ReactNode;
};

export function HeaderSlot({ children }: HeaderSlotProps) {
  return <header className="w-full shrink-0 flex border-b">{children}</header>;
}
