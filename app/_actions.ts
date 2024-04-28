'use server';

import { Prisma } from '@prisma/client';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import db from './lib/db';
import { z } from 'zod';
import { CreateFolderSchema, Folder } from './lib/validations';

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

  console.log(validatedData);

  try {
    await db.folder.create({
      data: {
        name: validatedData.data.name,
        emoji: validatedData.data.emoji,
        description: validatedData.data.description ?? '',
        userId: user?.id,
      },
    });

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
