import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export default async function BoookmarksPage() {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect('/api/auth/login');
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="w-full min- mx-auto flex bg-purple-50">
      <div className="w-[20%] bg-slate-100">1 </div>
      <div className="w-[80%] bg-slate-500"> 2</div>
    </div>
  );
}
