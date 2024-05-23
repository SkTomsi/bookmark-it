import 'server-only';

import { IsAuthorized } from '../_actions';
import db from '../lib/db';
import { redirect } from 'next/navigation';
import { User } from 'lucide-react';

export async function getAllFolders() {
  const user = await IsAuthorized();

  if (!user.userId) {
    console.log('unauthorized');
    redirect('/');
  }

  const folders = await db.folder.findMany({
    where: {
      userId: user.userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return { folders };
}

export async function getBookmarks(id: string) {
  const user = await IsAuthorized();

  if (!user.userId) {
    redirect('/');
  }

  const bookmarks = await db.bookmark.findMany({
    where: {
      folderId: id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return { bookmarks };
}

export async function SearchBookmarksAction(
  searchQuery: string | string[] | undefined,
) {
  const user = await IsAuthorized();
  const bookmarks = await db.bookmark.findMany({
    where: {
      AND: [
        {
          Folder: {
            userId: user.userId,
          },
        },
        {
          url: {
            contains: searchQuery as string
            ,
          },
        },
      ],
    },
  });

  return { bookmarks };
}
