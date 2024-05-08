import 'server-only';

import { IsAuthorized } from '../_actions';
import db from '../lib/db';
import { redirect } from 'next/navigation';

export async function getAllFolders() {
  const user = await IsAuthorized();

  if (!user) {
    throw new Error('Unauthorized');
  }

  const folders = await db.folder.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return { folders };
}

export async function getBookmarks(id: string) {
  const user = await IsAuthorized();

  if (!user) {
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
