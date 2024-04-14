'use server';

import { Prisma } from '@prisma/client';
import db from '../lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export async function CreateFolder(prevState: any, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    console.log('UNAUTHORIZED');
  }
  try {
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    console.log(name, description);

    const data = await db.folder.create({
      data: {
        name: name,
        description: description,
        userId: user?.id,
      },
    });

    return redirect('/bookmarks');
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
