import SidebarContainer from './SidebarContainer';
import { ModeToggle } from '../ui/mode-toggle';
import { currentUser } from '@clerk/nextjs/server';
import { UserDropdown } from '../UserDropdown';

export default async function AvatarCard() {
  const user = await currentUser();

  return (
    <SidebarContainer>
      <h1 className="text-xl font-extrabold text-primary mb-2">
        Welcome Back,
      </h1>
      <div className="flex items-center gap-x-3">
        <UserDropdown />
        <div className="flex justify-between w-full items-center">
          <div className="font-semibold text-black">{user?.fullName}</div>
          {/* <ModeToggle /> */}
        </div>
      </div>
    </SidebarContainer>
  );
}
