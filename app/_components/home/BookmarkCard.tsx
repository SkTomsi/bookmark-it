/* eslint-disable @next/next/no-img-element */
import { Bookmark } from '@prisma/client';
import Link from 'next/link';

function BookmarkCard({ bookmark }: { bookmark: Bookmark }) {
  return (
    <Link href={bookmark.url} referrerPolicy="no-referrer" target="_blank">
      <div
        key={bookmark.id}
        className="border border-brand-neutral-5 bg-white rounded-[8px] overflow-hidden"
      >
        <div className="aspect-ogimage bg-white relative">
          {bookmark.ogImageUrl ? (
            <img
              src={bookmark.ogImageUrl}
              className="aspect-ogimage object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              alt="og image"
            />
          ) : (
            <div className="aspect-ogimage object-contain absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {new URL(bookmark.url).hostname}
            </div>
          )}
        </div>

        <div className="py-2 px-3 font-semibold text-[13px] border-t border-t-brand-neutral-5 relative flex gap-x-1">
          <span className="absolute w-full bg-gradient-to-r from-transparent to-white from-80% to-90% after:content-['_'] "></span>
          <div>
            <img
              src={bookmark.iconUrl!}
              width={20}
              height={20}
              alt={'website icon'}
            />
          </div>
          <div className="text-nowrap">{new URL(bookmark.url).hostname}</div>
        </div>
      </div>
    </Link>
  );
}

export default BookmarkCard;
