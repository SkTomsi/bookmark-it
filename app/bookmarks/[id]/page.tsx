'use client';

import BookmarksContainer from '@/app/_components/bookmarks/BookmarksContainer';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useEffect } from 'react';

export default function Bookmarks() {
  const { id } = useParams();

  async function fetchData() {
    const result = await axios.post('/api/metadata', {
      url: 'https://tailwindcss.com/',
    });

    return result;
  }

  return <BookmarksContainer>{id}</BookmarksContainer>;
}
