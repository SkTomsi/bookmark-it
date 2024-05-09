import { CreateFolderModal } from './modals/CreateFolderModal';
import { CreateBookmarkModal } from './modals/CreateBookmarkModal';
import { IsAuthorized } from '../_actions';

export default async function Header() {
  const user = await IsAuthorized();

  return (
    <nav className="flex items-center justify-end pb-4">
      {user && (
        <div className="flex gap-x-3">
          <CreateFolderModal />
          <CreateBookmarkModal />
        </div>
      )}
    </nav>
  );
}
