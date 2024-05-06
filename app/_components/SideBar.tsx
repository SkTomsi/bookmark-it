import { BookText, Star } from 'lucide-react';
import AvatarCard from './bookmarks/AvatarCard';
import FolderLists from './bookmarks/FolderLists';
import { getAllFolders } from '../_data-access';

export default async function Sidebar() {
  const defaultList = [
    { name: 'Favourites', emoji: <Star /> },
    { name: 'Reading Lists', emoji: <BookText /> },
  ];

  const { folders } = await getAllFolders();

  console.log(folders);

  return (
    <div className="flex flex-col gap-y-4">
      <AvatarCard />
      <FolderLists listHeading="Your Lists" list={defaultList} />
      <FolderLists listHeading="Your Folders" list={folders} />
    </div>
  );
}
