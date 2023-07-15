'use client';

/* eslint-disable import/order */
import { Comment } from '@components/comment/Comment';
import { ContentsProps } from 'app/posts/[slug]/page';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

export function Contents({ source, frontMatter }: ContentsProps) {
  console.log(source);

  return (
    <div>
      <div>
        <header>
          <h1>{frontMatter.title}</h1>
          {frontMatter!.description && <p className="description">{frontMatter.description}</p>}
        </header>
        {frontMatter.categories.map(category => {
          return <div key={category}>{category}</div>;
        })}
      </div>
      <div>
        <p>{`최초 게시일  :  ${format(new Date(frontMatter.date), 'yyyy년 MM월 dd일')}`}</p>
        {typeof window === 'object' ? (
          <p>{`최종 수정일  :  ${format(
            new Date(window.document.lastModified),
            'yyyy년 MM월 dd일'
          )}`}</p>
        ) : null}
      </div>
      <div>
        <Image src={frontMatter.coverImage} width={200} height={200} alt="coverImage" />
      </div>

      <main style={{ margin: '40px 0' }}>
        <MDXRemote {...source} />
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }
        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
      <Comment />
    </div>
  );
}
