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
        <div className="w-[20%] bg-white p-4 pr-0 h-screen overflow-y-auto">
          <Sidebar />
        </div>
        <div className="w-[80%] h-screen overflow-y-scroll p-4 pl-0">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}
