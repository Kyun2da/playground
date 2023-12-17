import { Post } from '@interfaces/Post';
import { format, parse } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

export function ContentCard({ post }: { post: Post }) {
  return (
    <Card className="not-prose border-0">
      <Link
        href={`/posts/${post.draft ? 'draft' : 'published'}/${post.slug}`}
        className="flex m-auto shadow-lg transition duration-300 ease-in-out hover:scale-105 rounded-3xl max-w-3xl h-52"
        prefetch={true}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          width={200}
          height={200}
          className="overflow-hidden object-cover rounded-3xl"
        />
        <CardContent className="flex flex-col basis-3/4 p-6 justify-between">
          <div>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.excerpt}</CardDescription>
          </div>
          <div className="flex justify-between w-full text-base">
            <span>{format(parse(post.date, 'yyyy-mm-dd', new Date()), 'yyyy - mm - dd')}</span>
            <span>{post.time} min read</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
