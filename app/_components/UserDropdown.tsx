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
        <div className="rounded-full border-4 px-1 py-1 lg:py-1 flex items-center gap-x-3 border-primary">
          <img
            src={userImage!}
            alt="default pfp"
            className="rounded-full w-8 h-8"
          />
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
