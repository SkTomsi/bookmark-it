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
    <div className="max-w-[1400px] min- mx-auto flex flex-col bg-purple-50">
      <div className="bg-purple-500 h-screen w-full rounded-3xl"></div>
    </div>
  );
}
