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

export default async function Header() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="h-[10vh] flex items-center justify-between px-10">
      <div className="flex gap-x-4 items-center">
        <ModeToggle />
        {user ? (
          <>
            <UserDropdown userImage={user.picture} />
          </>
        ) : (
          <div className="flex items-center gap-x-4">
            <Button variant="secondary" asChild>
              <RegisterLink>Sign up</RegisterLink>
            </Button>
            <Button asChild>
              <LoginLink>Log in</LoginLink>
            </Button>
          </div>
        )}
      </div>
      <div className="flex gap-x-3">
        <CreateFolderModal />
        <AccentButton>Add Bookmark</AccentButton>
      </div>
    </nav>
  );
}
