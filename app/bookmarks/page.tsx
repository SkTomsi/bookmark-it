import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function BoookmarksPage() {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect('/api/auth/login');
  }

  return <div>Please select a folder</div>;
}
