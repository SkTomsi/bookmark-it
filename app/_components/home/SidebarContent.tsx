// 'use client';

import { BookText, PanelRightClose, PanelRightOpen, Star } from 'lucide-react';
import AvatarCard from './AvatarCard';
import { FolderLists } from './FolderLists';
import { Folder } from '@prisma/client';
import { useState } from 'react';

export default function SidebarContent(props: { folders: Folder[] }) {
  const defaultList = [
    { id: 'favourites', name: 'Favourites', emoji: <Star size={16} /> },
    { id: 'reading-list', name: 'Reading List', emoji: <BookText size={16} /> },
  ];

  //   const [isOpen, setIsOpen] = useState<boolean>(true);

  //   const handleSidebarClose = () => {
  //     setIsOpen(!isOpen);
  //   };

  return (
    <>
      {/* <div className="absolute right-2 top-2">
        {isOpen ? (
          <PanelRightClose />
        ) : (
          <PanelRightOpen onClick={handleSidebarClose} />
        )}
      </div> */}
      <AvatarCard />
      <FolderLists listHeading="Your Lists" list={defaultList} />
      <FolderLists listHeading="Your Folders" list={props.folders} />
    </>
  );
}
