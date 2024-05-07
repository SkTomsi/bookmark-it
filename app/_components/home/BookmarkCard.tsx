import { Bookmark } from '@prisma/client';

function BookmarkCard({ bookmark }: { bookmark: Bookmark }) {
  return (
    <div
      key={bookmark.id}
      className="border border-brand-neutral-5 bg-white rounded-[8px] overflow-hidden"
    >
      <div className="aspect-ogimage bg-white">Image</div>

      <div className="py-2 px-3 font-semibold text-[13px] border-t border-t-brand-neutral-5">
        {bookmark.url}
      </div>
    </div>
  );
}

export default BookmarkCard;
