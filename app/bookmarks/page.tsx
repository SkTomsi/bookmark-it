import { auth, clerkClient } from '@clerk/nextjs/server';
import BookmarksContainer from '../_components/home/BookmarksContainer';
import SearchResults from '../_components/home/SearchResults';

export const dynamic = 'force-dynamic';

export default async function BoookmarksPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { userId } = auth().protect();
  const user = await clerkClient.users.getUser(userId);

  if (!user) return null;

  return (
    <BookmarksContainer>
      <SearchResults searchQuery={searchParams.query.toLowerCase()} />
    </BookmarksContainer>
  );
}
