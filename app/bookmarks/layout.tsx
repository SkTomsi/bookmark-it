import Header from '../_components/Header';
import Sidebar from '../_components/SideBar';

export const dynamic = 'force-dynamic';

export default function BookmarkPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex gap-x-4 min-h-screen p-4">
        <div className="w-[20%] bg-white">
          <Sidebar />
        </div>
        <div className="w-[80%] min-h-screen">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}
