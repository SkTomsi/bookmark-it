import db from '@/app/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';
import { generateUsername } from 'unique-username-generator';

export const dynamic = 'force-dynamic';

export async function GET() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || user === null || !user.id) throw new Error('No user found!');

  let dbUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    dbUser = await db.user.create({
      data: {
        id: user.id ?? '',
        email: user.email ?? '',
        firstName: user.given_name ?? '',
        lastname: user.family_name ?? '',
        imageUrl: user.picture ?? '',
        userName: generateUsername('-', 3, 15),
      },
    });
  }

  return NextResponse.redirect('http://localhost:3000/bookmarks');
}
