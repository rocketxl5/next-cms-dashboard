type DialogContextFieldProps = {
  label: string;
  children: React.ReactNode;
};

export function DialogContextField({
  label,
  children,
}: DialogContextFieldProps) {
  return (
    <div className="flex gap-2">
      <span className="font-medium text-foreground">
        {label}:
      </span>

      <span>{children}</span>
    </div>
  );
}