import { auth, clerkClient } from '@clerk/nextjs/server';
import BookmarksContainer from '../_components/home/BookmarksContainer';

export const dynamic = 'force-dynamic';

export default async function BoookmarksPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { userId } = auth().protect();
  const user = await clerkClient.users.getUser(userId);

  console.log(searchParams.query);

  if (!user) return null;

  return (
    <BookmarksContainer>
      showing results for {searchParams.query}
    </BookmarksContainer>
  );
}
