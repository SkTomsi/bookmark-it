import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { CreateFolderModal } from './modals/CreateFolderModal';
import { CreateBookmarkModal } from './modals/CreateBookmarkModal';

export default async function Header() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="flex items-center justify-end  py-4">
      {user && (
        <div className="flex gap-x-3">
          <CreateFolderModal />
          <CreateBookmarkModal />
        </div>
      )}
    </nav>
  );
}
