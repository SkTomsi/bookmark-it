import { UserButton } from '@clerk/nextjs';

export function UserDropdown() {
  return (
    <div className="border-2 border-primary flex items-center rounded-full p-[2px]">
      <UserButton />
    </div>
  );
}
