'use client';

import { Comment } from '@components/comment/Comment';
import { MDXComponents } from '@components/mdx-components/MDXComponent';
import { ContentsProps } from 'app/posts/[...slug]/page';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

export function Contents({ source, frontMatter }: ContentsProps) {
  console.log(frontMatter);

  return (
    <div className="flex flex-col max-w-3xl mx-auto justify-center">
      <h1 className="text-center !mb-3">{frontMatter.title}</h1>
      {frontMatter.excerpt && (
        <span className="flex justify-center my-0 description text-center">
          {frontMatter.excerpt}
        </span>
      )}

      <div className="flex flex-col gap-2 mt-8">
        <div className="flex justify-center">
          {frontMatter.categories.map(category => {
            return (
              <div
                className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                key={category}
              >
                {category}
              </div>
            );
          })}
        </div>
        <span className="flex justify-center text-sm">{`${format(
          new Date(frontMatter.date),
          'yyyy.MM.dd'
        )} ·
        ${frontMatter.time} min read`}</span>
      </div>
      <div className="flex justify-center">
        <Image
          src={frontMatter.coverImage}
          width={200}
          height={200}
          className="rounded-xl"
          alt="coverImage"
        />
      </div>
      <div className="not-prose mb-16">
        <MDXRemote {...source} components={MDXComponents} />
      </div>
      <Comment />
    </div>
  );
}
