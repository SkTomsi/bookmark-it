'use client';

import BookmarksContainer from '@/app/_components/bookmarks/BookmarksContainer';
import { useParams } from 'next/navigation';

export default function Bookmarks() {
  const { id } = useParams();

  return <BookmarksContainer>{id}</BookmarksContainer>;
}
