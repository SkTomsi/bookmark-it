'use client';

import { Loader2, SearchIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

export function Search() {
  const [isPending, startTransition] = useTransition();
  const { replace } = useRouter();

  const handleSearch = (searchTerm: string) => {
    const params = new URLSearchParams(window.location.search);
    if (searchTerm) {
      params.set('query', searchTerm);
    } else {
      params.delete;
    }

    startTransition(() => {
      replace(`/bookmarks?${params.toString()}`);
    });
  };

  return (
    <div className="relative flex items-center max-w-2xl w-1/2">
      <SearchIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
      <Input
        placeholder="Search bookmarks"
        className=" pl-8 bg-brand-neutral-3 border-brand-neutral-5"
        onChange={(e) => handleSearch(e.target.value)}
      />
      {isPending && (
        <div className="absolute right-2 top-1/2  -translate-y-1/2 transform">
          <Loader2 className="h-4 w-4 animate-spin" />
        </div>
      )}
    </div>
  );
}
