export default function SidebarContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-4 border border-[#F0F0F0] rounded-lg">{children}</div>;
}
