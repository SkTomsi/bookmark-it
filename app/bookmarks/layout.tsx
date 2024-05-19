import Header from '../_components/Header';
import Sidebar from '../_components/SideBar';

export default function BookmarkPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex gap-x-4 ">
        <div className="w-[244px] bg-white p-4 pr-0 h-screen overflow-y-auto">
          <Sidebar />
        </div>
        <div className="flex-1 h-screen overflow-y-scroll p-4 pl-0">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}
