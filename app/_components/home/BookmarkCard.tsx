'use client';

import { Bookmark } from '@prisma/client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Metadata } from 'unfurl.js/dist/types';

function BookmarkCard({ bookmark }: { bookmark: Bookmark }) {
  const [image, setImage] = useState<string>('');
  const [favicon, setFavicon] = useState<string>('');
  useEffect(() => {
    async function fetchOgImage() {
      try {
        const { data } = (await axios.post('/api/metadata', {
          url: bookmark.url,
        })) as { data: Metadata };

        setFavicon(data.favicon!);
        setImage(data.open_graph.images?.[0].url!);
      } catch (err) {
        console.log(err);
      }
    }

    fetchOgImage();
  }, [bookmark?.url]);

  console.log(favicon);

  return (
    <Link href={bookmark.url}>
      <div
        key={bookmark.id}
        className="border border-brand-neutral-5 bg-white rounded-[8px] overflow-hidden"
      >
        <div className="aspect-ogimage bg-white">
          <img src={image} className="aspect-ogimage object-cover" />
        </div>

        <div className="py-2 px-3 font-semibold text-[13px] border-t border-t-brand-neutral-5 relative flex gap-x-1">
          <span className="absolute w-full bg-gradient-to-r from-transparent to-white from-80% to-90% after:content-['_'] "></span>
          <div>
            <img src={favicon} width={20} height={20} alt={'ogimage'} />
          </div>
          <div className="text-nowrap">
            {bookmark.url.length > 20
              ? bookmark.url.slice(0, 40)
              : bookmark.url}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BookmarkCard;
