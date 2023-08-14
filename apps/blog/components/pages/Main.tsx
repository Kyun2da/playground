'use client';

import { ContentCard } from '@components/content-card/ContentCard';
import { Header } from '@components/header/Header';
import { Post } from 'interfaces/Post';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

interface Props {
  allPosts: Post[];
}

export function Main({ allPosts }: Props) {
  const [showDraft, setShowDraft] = useState(false);

  return (
    <>
      <Header />
      {process.env.NODE_ENV === 'production' ? null : (
        <Button
          onClick={() => {
            setShowDraft(x => !x);
          }}
          className="flex justify-center w-screen"
        >
          {showDraft ? '초안' : '배포된 글'}
        </Button>
      )}
      <main className="w-screen flex flex-col justify-center px-16 gap-10">
        {allPosts
          .filter(post => post.draft === showDraft)
          .map(post => {
            return <ContentCard key={post.slug} post={post} />;
          })}
      </main>
    </>
  );
}
