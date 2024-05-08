import { BookmarkList } from '@/app/_components/home/BookmarkList';
import BookmarksContainer from '@/app/_components/home/BookmarksContainer';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

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
