import { SearchBookmarksAction } from '@/app/_data-access';
import { BookmarkList } from './BookmarkList';
import { redirect } from 'next/navigation';

export default async function SearchResults({
  searchQuery,
}: {
  searchQuery: string;
}) {
  const { bookmarks } = await SearchBookmarksAction(searchQuery);

  return (
    <div className="flex flex-col space-y-3">
      {searchQuery && (
        <div>
          showing results for <span className="font-bold">{searchQuery}</span>
        </div>
      )}
      <BookmarkList bookmarks={bookmarks} type="from-search" />
    </div>
  );
}
