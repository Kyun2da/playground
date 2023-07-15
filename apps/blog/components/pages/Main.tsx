'use client';

import { ContentCard } from '@components/content-card/ContentCard';
import { Header } from '@components/header/Header';
import { Post } from 'interfaces/Post';

interface Props {
  allPosts: Post[];
}

export function Main({ allPosts }: Props) {
  return (
    <>
      <Header />
      <main className="w-screen flex flex-col justify-center px-16 gap-10">
        {allPosts
          .filter(post => process.env.NODE_ENV === 'development' || post.draft === false)
          .map(post => {
            return <ContentCard key={post.slug} post={post} />;
          })}
      </main>
    </>
  );
}
