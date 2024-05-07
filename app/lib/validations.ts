import { z } from 'zod';

export const CreateFolderSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().max(255).optional(),
  emoji: z
    .string()
    .emoji('You can only add emojis')
    .min(1)
    .max(2, 'You can add only 1 emoji'),
});

export type Folder = z.infer<typeof CreateFolderSchema>;

export const CreateBookmarkSchema = z.object({
  url: z.string().url(),
  folderId: z.string(),
});

export type Bookmark = z.infer<typeof CreateBookmarkSchema>;
