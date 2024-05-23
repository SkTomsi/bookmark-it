import { BookmarkList } from '@/app/_components/home/BookmarkList';
import BookmarksContainer from '@/app/_components/home/BookmarksContainer';
import { getBookmarks } from '@/app/_data-access';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default async function Bookmarks({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [query: string]: string | string[] | undefined };
}) {
  const { bookmarks } = await getBookmarks(params.id);

  console.log(searchParams.query);

  return (
    <BookmarksContainer>
      <Suspense fallback={<BookmarkList.loading />}>
        <BookmarkList bookmarks={bookmarks} type="from-folder" />
      </Suspense>
    </BookmarksContainer>
  );
}
