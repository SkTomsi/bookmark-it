import Image from 'next/image';
import { Button } from './components/ui/button';
import { Rocket } from 'lucide-react';
import Link from 'next/link';
import bookmarkImg from '../public/bookmark.png';
import linkImg from '../public/link.png';

export default function Home() {
  return (
    <main className="h-full w-full px-20 flex flex-col items-center justify-center relative mt-40">
      <div className=" flex flex-col items-center justify-center gap-y-4">
        <div className="flex fle-col items-center justify-center gap-x-5">
          <h1 className="text-8xl font-[700] text-balance text-center">
            Bookmark<span className="text-purple-600">.it</span>
          </h1>
          <div className="flex ">
            <Image
              src={bookmarkImg}
              alt="bookmark icon"
              className="h-20 w-20"
            />
            <Image src={linkImg} alt="bookmark icon" className="h-20 w-20" />
          </div>
        </div>
        <p className="text-lg text-center w-[50%]">
          the ultimate bookmarking solution for users who seek a convenient and
          feature-rich platform to save and organize their web links
          effortlessly
        </p>
      </div>
      <div className="mt-10 ">
        <Link href={'/bookmarks'}>
          <Button className="gap-x-1">
            Get Started <Rocket />
          </Button>
        </Link>
      </div>
    </main>
  );
}
