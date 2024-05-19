import { UserButton } from '@clerk/nextjs';

export function UserDropdown() {
  return (
    <div className="border-2 border-brand-neutral-3 flex items-center rounded-full p-[2px]">
      <UserButton />
    </div>
  );
}
