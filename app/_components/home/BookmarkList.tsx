import { Bookmark } from '@prisma/client';
import BookmarkCard from './BookmarkCard';

export default function BookmarkList(props: {
  bookmarks: Bookmark[];
}): JSX.Element {
  return (
    <div className="grid grid-cols-4 gap-4">
      {props.bookmarks.map((bookmark) => {
        return <BookmarkCard bookmark={bookmark} key={bookmark.id} />;
      })}
    </div>
  );
}
