'use client';

import SidebarContainer from './SidebarContainer';
import React, { Suspense, useEffect, useState } from 'react';
import { List } from '@/app/_interface';
import { CreateFolderModal } from '../modals/CreateFolderModal';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { Skeleton } from '../ui/skeleton';

interface ListItemprops {
  name: string;
  emoji: JSX.Element | string;
  id: string;
  activeId: string | number | string[];
}

function ListItem({ name, emoji, id, activeId }: ListItemprops) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (activeId && pathname.includes('/bookmarks/')) {
      const isActive = id === activeId;
      setIsActive(isActive);
    }
  }, [id, activeId, pathname]);

  return (
    <Link href={`/bookmarks/${id}`}>
      <div
        className={`flex p-1 items-center border border-transparent gap-x-2  hover:border-brand-neutral-5 hover:bg-brand-neutral-3 group rounded-[4px] ${
          isActive ? ' border-brand-neutral-8/30 bg-brand-neutral-3' : ''
        }`}
      >
        <div
          className={`border border-brand-neutral-4 p-1 text-brand-neutral-8 rounded-[4px] group-hover:bg-brand-neutral-1 bg-white group-hover:border-brand-neutral-5 ${
            isActive ? 'bg-brand-neutral-1 border-brand-neutral-5' : ''
          }`}
        >
          {emoji}
        </div>
        <div
          className={`text-sm font-medium text-brand-neutral-8 group-hover:text-brand-neutral-10 ${
            isActive ? ' text-brand-neutral-10 font-[600]' : ''
          }`}
        >
          {name.length > 28 ? `${name.slice(0, 28)}...` : name}
        </div>
      </div>
    </Link>
  );
}
interface props {
  listHeading: string;
  list: List[];
}

export function FolderLists({ listHeading, list }: props) {
  const { id } = useParams();

  return (
    <SidebarContainer>
      <Suspense fallback={<FolderLists.loading />}>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-sm  text-brand-gray-500 font-bold">
            {listHeading}
          </h1>
          <div className="">
            {list.length === 0 && (
              <div>
                Oops, no folders created yet! <CreateFolderModal />
              </div>
            )}
            {list.map((list, i) => (
              <ListItem
                key={i}
                emoji={list.emoji}
                name={list.name}
                id={list.id}
                activeId={id}
              />
            ))}
          </div>
        </div>
      </Suspense>
    </SidebarContainer>
  );
}

FolderLists.loading = function () {
  return (
    <>
      {[...new Array(4)].map((_, i) => (
        <div className="flex flex-col space-y-3" key={i}>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
      ))}
    </>
  );
};
