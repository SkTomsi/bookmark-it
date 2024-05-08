import { Bookmark } from '@prisma/client';
import BookmarkCard from './BookmarkCard';
import { Skeleton } from '../ui/skeleton';
import { getBookmarks } from '@/app/_data-access';

export async function BookmarkList(props: { id: string }) {
  const { bookmarks } = await getBookmarks(props.id);

  return (
    <div className="grid grid-cols-4 gap-4">
      {bookmarks.map((bookmark) => {
        return <BookmarkCard bookmark={bookmark} key={bookmark.id} />;
      })}
    </div>
  );
}

BookmarkList.loading = function () {
  return (
    <div className="grid grid-cols-4 gap-4">
      {[...new Array(4)].map((_, i) => (
        <div className="flex flex-col space-y-3" key={i}>
          <Skeleton className="h-[125px] w-[250px] rounded-xl bg-white" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-white" />
          </div>
        </div>
      ))}
    </div>
  );
};
