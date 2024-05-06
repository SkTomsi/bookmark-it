import { Star } from 'lucide-react';
import SidebarContainer from './SidebarContainer';
import React from 'react';

interface List {
  name: string;
  emoji: React.JSX.Element;
}

type ListType = {
  listName: string;
  lists: List[];
};

function ListItem({}) {
  return (
    <div className="flex p-2 items-center gap-x-2">
      <div className="border-2 border-brand-neutral-4 p-1 text-brand-neutral-8 rounded-[4px]">
        <Star size={'20'} />
      </div>
      <div className="text-sm font-medium text-brand-neutral-8">Favourites</div>
    </div>
  );
}

export default function FolderLists(props: ListType) {
  return (
    <SidebarContainer>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-sm  text-brand-gray-500 font-bold">
          {props.listName}
        </h1>
        <div className="">
          {props.lists.map((list, i) => (
            <ListItem key={i} />
          ))}
        </div>
      </div>
    </SidebarContainer>
  );
}
