'use client';

/* eslint-disable import/order */
import { Comment } from '@components/comment/Comment';
import { ContentsProps } from 'app/posts/[slug]/page';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Contents({ source, frontMatter }: ContentsProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col max-w-3xl mx-auto justify-center">
      <div>
        <header>
          <h1 className="text-center">{frontMatter.title}</h1>
          {frontMatter.excerpt && <p className="description text-center">{frontMatter.excerpt}</p>}
        </header>
      </div>
      <div className="flex flex-col ml-auto">
        {frontMatter.categories.map(category => {
          return (
            <span className="ml-auto" key={category}>
              {category}
            </span>
          );
        })}
        <span>{`최초 게시일  :  ${format(new Date(frontMatter.date), 'yyyy년 MM월 dd일')}`}</span>
        {typeof window === 'object' ? (
          <span>{`최종 수정일  :  ${format(
            new Date(window.document.lastModified),
            'yyyy년 MM월 dd일'
          )}`}</span>
        ) : null}
      </div>
      <div className="flex justify-center">
        <Image src={frontMatter.coverImage} width={200} height={200} alt="coverImage" />
      </div>

      <div className="not-prose">
        <MDXRemote {...source} lazy={true} />
      </div>
      <Comment />
    </div>
  );
}
