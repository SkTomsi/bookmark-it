import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import BookmarksContainer from '../_components/home/BookmarksContainer';

export default async function BoookmarksPage() {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect('/api/auth/login');
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return <div>Please select a folder</div>;
}
