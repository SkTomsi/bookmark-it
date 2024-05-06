import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import Sidebar from '../_components/SideBar';
import Header from '../_components/Header';
import BookmarksContainer from '../_components/bookmarks/Bookmarks';

export default async function BoookmarksPage() {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect('/api/auth/login');
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="flex gap-x-4 min-h-screen p-4">
      <div className="w-[20%] bg-white">
        <Sidebar />
      </div>
      <div className="w-[80%] ">
        <Header />
        <BookmarksContainer />
      </div>
    </div>
  );
}
