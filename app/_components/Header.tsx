import { CreateFolderModal } from './modals/CreateFolderModal';
import { CreateBookmarkModal } from './modals/CreateBookmarkModal';
import { IsAuthorized } from '../_actions';
import { Search } from './home/Search';

export default async function Header() {
  const user = await IsAuthorized();

  return (
    <nav className="flex items-center justify-between pb-4">
      <Search />
      {user && (
        <div className="flex gap-x-3">
          <CreateFolderModal />
          <CreateBookmarkModal />
        </div>
      )}
    </nav>
  );
}
