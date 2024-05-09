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
import { SignedOut, UserButton } from '@clerk/nextjs';

export function UserDropdown() {
  return (
    <div className="border-4 border-primary flex items-center rounded-full p-1">
      <UserButton />
    </div>
  );
}
