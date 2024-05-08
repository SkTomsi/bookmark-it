import { BookmarkList } from '@/app/_components/home/BookmarkList';
import BookmarksContainer from '@/app/_components/home/BookmarksContainer';
import { getBookmarks } from '@/app/_data-access';
import { Suspense, useEffect } from 'react';

export default function Bookmarks({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return (
    <BookmarksContainer>
      <Suspense fallback={<BookmarkList.loading />}>
        <BookmarkList id={id} />
      </Suspense>
    </BookmarksContainer>
  );
}
