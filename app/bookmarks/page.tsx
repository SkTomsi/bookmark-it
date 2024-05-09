import { auth, clerkClient } from '@clerk/nextjs/server';

export const dynamic = 'force-dynamic';

export default async function BoookmarksPage() {
  const { userId } = auth().protect();
  const user = await clerkClient.users.getUser(userId);

  if (!user) return null;

  return <div>Please select a folder</div>;
}
