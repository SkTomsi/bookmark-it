import BookmarkList from '@/app/_components/home/BookmarkList';
import BookmarksContainer from '@/app/_components/home/BookmarksContainer';
import { getBookmarks } from '@/app/_data-access';
import axios from 'axios';
import { useEffect } from 'react';

export default async function Bookmarks({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { bookmarks } = await getBookmarks(id);

  // const { id } = useParams();

  // async function fetchData() {
  //   const result = await axios.post('/api/metadata', {
  //     url: 'https://tailwindcss.com/',
  //   });

  //   return result;
  // }

  return (
    <BookmarksContainer>
      <BookmarkList bookmarks={bookmarks} />
    </BookmarksContainer>
  );
}
