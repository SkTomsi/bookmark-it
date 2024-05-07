'use server';

import { getAllFolders } from './index';

export async function FolderOptionList() {
  const { folders } = await getAllFolders();

  const optionList = folders.map((folder) => ({
    label: folder.name,
    value: folder.id,
    emoji: folder.emoji,
  }));

  return { optionList };
}
