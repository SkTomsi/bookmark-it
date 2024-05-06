import {
  getKindeServerSession,
  LoginLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/server';
import { ModeToggle } from './ui/mode-toggle';
import { UserDropdown } from './UserDropdown';
import { Button } from './ui/button';
import { CreateFolderModal } from './modals/CreateFolderModal';
import { AccentButton } from './ui/AccentButton';
import { BookmarkPlus } from 'lucide-react';

export default async function Header() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="flex items-center justify-end  py-4">
      {user && (
        <div className="flex gap-x-3">
          <CreateFolderModal />
          <AccentButton>
            <BookmarkPlus />
            Add Bookmark
          </AccentButton>
        </div>
      )}
    </nav>
  );
}
