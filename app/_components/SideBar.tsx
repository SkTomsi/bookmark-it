import { BookText, Star } from 'lucide-react';
import AvatarCard from './bookmarks/AvatarCard';
import FolderLists from './bookmarks/FolderLists';

export default function Sidebar() {
  const defaultList = [
    { name: 'Favourites', emoji: <Star /> },
    { name: 'Reading Lists', emoji: <BookText /> },
  ];

  return (
    <div className="flex flex-col gap-y-4">
      <AvatarCard />
      <FolderLists listName="Your Lists" lists={defaultList} />
      <FolderLists listName="Your Folders" lists={defaultList}/>
    </div>
  );
}
