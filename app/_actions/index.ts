'use server';

import { Prisma } from '@prisma/client';
import db from '../lib/db';
import { CreateBookmarkSchema, CreateFolderSchema } from '../lib/validations';
import { revalidatePath } from 'next/cache';
import { unfurl } from 'unfurl.js';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export async function IsAuthorized() {
  const user = auth();
  return user;
}

export async function CreateFolder(prevState: any, formData: unknown) {
  const user = await IsAuthorized();

  if (!user.userId) {
    console.log('UNAUTHORIZED');
    redirect('/');
  }

  const validatedData = CreateFolderSchema.safeParse(formData);

  if (!validatedData.success) {
    return {
      message: 'error',
      status: false,
    };
  }

  try {
    await db.folder.create({
      data: {
        name: validatedData.data.name,
        emoji: validatedData.data.emoji,
        description: validatedData.data.description ?? '',
        userId: user?.userId,
      },
    });

    revalidatePath('/bookmarks');

    return {
      message: 'success',
      status: true,
    };
  } catch (e) {
    // if (e instanceof Prisma.PrismaClientKnownRequestError) {
    //   if (e.code === 'P2002') {
    //     return {
    //       message: 'This folder is already in use!',
    //       status: 'error',
    //     };
    //   }
    // }
    return {
      message: 'Something went wrong!',
      status: 'error',
    };
  }
}
export async function CreateBookmark(prevState: any, formData: unknown) {
  const user = await IsAuthorized();

  if (!user.userId) {
    console.log('UNAUTHORIZED');
  }

  const validatedData = CreateBookmarkSchema.safeParse(formData);

  if (!validatedData.success) {
    return {
      message: 'error',
      status: false,
    };
  }

  try {
    const result = await unfurl(validatedData.data.url);

    await db.bookmark.create({
      data: {
        url: validatedData.data.url,
        folderId: validatedData.data.folderId,
        iconUrl: result.favicon,
        ogImageUrl: result.open_graph.images?.[0].url ?? result.open_graph.url,
      },
    });

    revalidatePath('/bookmarks');

    return {
      message: 'success',
      status: true,
    };
  } catch (e) {
    // if (e instanceof Prisma.PrismaClientKnownRequestError) {
    //   if (e.code === 'P2002') {
    //     return {
    //       message: 'This bookmark already exists!',
    //       status: 'error',
    //     };
    //   }
    // }
    return {
      message: 'Something went wrong!',
      status: 'error',
    };
  }
}
