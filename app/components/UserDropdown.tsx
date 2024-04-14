/* eslint-disable @next/next/no-img-element */
import { MenuIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import Link from 'next/link';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

interface iAppProps {
  userImage: string | null;
}

export function UserDropdown({ userImage }: iAppProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:py-2 flex items-center gap-x-3">
          <img
            src={userImage!}
            alt="default pfp"
            className="rounded-full hidden lg:block w-8 h-8"
          />
          <MenuIcon className="w-6 h-6 lg:h-5 lg:w-5"></MenuIcon>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem>
          <LogoutLink>Logout</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
