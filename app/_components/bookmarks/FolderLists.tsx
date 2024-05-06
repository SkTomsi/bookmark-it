import { Star } from 'lucide-react';
import SidebarContainer from './SidebarContainer';
import React from 'react';
import { List } from '@/app/_interface';
import { CreateFolderModal } from '../modals/CreateFolderModal';

interface ListItemprops {
  name: string;
  emoji: JSX.Element | string;
}

function ListItem({ name, emoji }: ListItemprops) {
  return (
    <div className="flex p-1 items-center border border-transparent gap-x-2 hover:border hover:border-brand-neutral-5 hover:bg-brand-neutral-3 group rounded-[4px]">
      <div className="border border-brand-neutral-4 p-1 text-brand-neutral-8 rounded-[4px] group-hover:bg-brand-neutral-1 bg-white group-hover:border-brand-neutral-5 ">
        {emoji}
      </div>
      <div className="text-sm font-medium text-brand-neutral-8 group-hover:font-bold">
        {name.length > 28 ? `${name.slice(0, 28)}...` : name}
      </div>
    </div>
  );
}
interface props {
  listHeading: string;
  list: List[];
}

export default function FolderLists({ listHeading, list }: props) {
  return (
    <SidebarContainer>
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
            <ListItem key={i} emoji={list.emoji} name={list.name} />
          ))}
        </div>
      </div>
    </SidebarContainer>
  );
}
