import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { FolderPlusIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { CreateFolderModal } from '../components/modals/CreateFolderModal';

export default async function BoookmarksPage() {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect('/api/auth/login');
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="max-w-[1000px] min- mx-auto flex flex-col ">
      <div className="w-full bg-primary/5 py-5 px-2 rounded-md">
        Hello,
        <span className="font-[800] text-primary">
          {' '}
          {user?.given_name} {user?.family_name}
        </span>
      </div>
      <div className="flex my-4 gap-x-3">
        <Card className="w-[20%] flex flex-col bg-primary/15 min-h-screen">
          <div className="p-4 flex justify-between items-center">
            <h1 className="text-lg font-medium">folders</h1>
            <div>
              <CreateFolderModal />
            </div>
          </div>
        </Card>
        <Card className="w-[80%] flex flex-col bg-primary/50">
          Your bookmarks
        </Card>
      </div>
    </div>
  );
}
