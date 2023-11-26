'use client';

import { Comment } from '@components/comment/Comment';
import { MDXComponents } from '@components/mdx-components/MDXComponent';
import { ContentsProps } from 'app/posts/[...slug]/page';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

export function Contents({ source, frontMatter }: ContentsProps) {
  return (
    <div className="flex flex-col max-w-3xl mx-auto justify-center">
      <div>
        <header className="my-20">
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
        <MDXRemote {...source} components={MDXComponents} />
      </div>
      <Comment />
    </div>
  );
}
