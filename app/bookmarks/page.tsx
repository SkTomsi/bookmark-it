import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import Sidebar from '../_components/SideBar';

export default async function BoookmarksPage() {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect('/api/auth/login');
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="flex  m-5">
      <div className="w-[20%] bg-white">
        <Sidebar />
      </div>
      <div className="w-[80%] "></div>
    </div>
  );
}
