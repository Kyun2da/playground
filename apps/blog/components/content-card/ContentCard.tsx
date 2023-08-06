import { Post } from '@interfaces/Post';
import { format, parse } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

export function ContentCard({ post }: { post: Post }) {
  return (
    <Card className="not-prose border-0">
      <Link
        href={`/posts/${post.slug}`}
        className="flex m-auto shadow-lg transition duration-300 ease-in-out hover:scale-105 rounded-3xl max-w-3xl h-52"
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
          <div className="flex justify-between w-full">
            <p>{format(parse(post.date, 'yyyy-mm-dd', new Date()), 'yyyy - mm - dd')}</p>
            <p>읽는데 {post.time}분</p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
