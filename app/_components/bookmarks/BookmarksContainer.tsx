export default function BookmarksContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-full bg-brand-neutral-3 border border-brand-neutral-5 rounded-[8px]">
      {children}
    </div>
  );
}
