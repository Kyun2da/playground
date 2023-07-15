'use client';

import { ContentCard } from '@components/content-card/ContentCard';
import { Header } from '@components/header/Header';
import { Post } from 'interfaces/Post';

interface Props {
  allPosts: Post[];
}

export function Main({ allPosts }: Props) {
  console.log(allPosts);

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center px-16 gap-6">
        {allPosts
          .filter(post => process.env.NODE_ENV === 'development' || post.draft === false)
          .map(post => {
            return <ContentCard key={post.slug} post={post} />;
          })}
      </main>
    </>
  );
}
