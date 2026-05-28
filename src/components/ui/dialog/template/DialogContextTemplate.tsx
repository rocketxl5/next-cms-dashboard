type DialogContextTemplateProps = {
  children: React.ReactNode;
};

export function DialogContextTemplate({
  children,
}: DialogContextTemplateProps) {
  return (
    <div className="bg-muted rounded-lg border border-strong p-3">
      <div className="space-y-2 text-sm">
        {children}
      </div>
    </div>
  );
}