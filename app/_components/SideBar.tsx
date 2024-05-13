import { BookText, Star } from 'lucide-react';
import AvatarCard from './home/AvatarCard';
import { getAllFolders } from '../_data-access';
import { FolderLists } from './home/FolderLists';

export default async function Sidebar() {
  const defaultList = [
    { id: 'favourites', name: 'Favourites', emoji: <Star /> },
    { id: 'reading-list', name: 'Reading List', emoji: <BookText /> },
  ];

  const { folders } = await getAllFolders();

  return (
    <div className="flex flex-col gap-y-4">
      <AvatarCard />
      <FolderLists listHeading="Your Lists" list={defaultList} />
      <FolderLists listHeading="Your Folders" list={folders} />
    </div>
  );
}
