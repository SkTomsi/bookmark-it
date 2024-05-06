import db from '@/app/_lib/db';
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

  console.log(process.env.NODE_ENV, 'CURRENT ENV');

  return NextResponse.redirect(`${process.env.KINDE_SITE_URL}/bookmarks`);
}
