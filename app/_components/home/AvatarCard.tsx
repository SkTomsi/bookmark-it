import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { UserDropdown } from '../UserDropdown';
import SidebarContainer from './SidebarContainer';
import { ModeToggle } from '../ui/mode-toggle';

export default async function AvatarCard() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user?.id) {
    return;
  }

  return (
    <SidebarContainer>
      <h1 className="text-xl font-extrabold text-primary mb-2">
        Welcome Back,
      </h1>
      <div className="flex items-center gap-x-3">
        <UserDropdown userImage={user.picture} />
        <div className="flex justify-between w-full items-center">
          <div className="font-semibold text-black">
            {user.given_name} {user.family_name}
          </div>
          <ModeToggle />
        </div>
      </div>
    </SidebarContainer>
  );
}
