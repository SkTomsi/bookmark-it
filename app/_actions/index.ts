'use server';

import { Prisma } from '@prisma/client';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import db from '../lib/db';
import { CreateBookmarkSchema, CreateFolderSchema } from '../lib/validations';
import { revalidatePath } from 'next/cache';
import axios from 'axios';

export async function IsAuthorized() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return user;
}

export async function CreateFolder(prevState: any, formData: unknown) {
  const user = await IsAuthorized();

  if (!user) {
    console.log('UNAUTHORIZED');
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
        userId: user?.id,
      },
    });

    revalidatePath('/bookmarks');

    return {
      message: 'success',
      status: true,
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return {
          message: 'This folder is already in use!',
          status: 'error',
        };
      }
    }
    throw e;
  }
}
export async function CreateBookmark(prevState: any, formData: unknown) {
  const user = await IsAuthorized();

  if (!user) {
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
    await db.bookmark.create({
      data: {
        url: validatedData.data.url,
        folderId: validatedData.data.folderId,
      },
    });

    revalidatePath('/bookmarks');

    return {
      message: 'success',
      status: true,
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return {
          message: 'This bookmark already exists!',
          status: 'error',
        };
      }
    }
    throw e;
  }
}
