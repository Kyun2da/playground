'use client';

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
      {/* {allPosts
        .filter(post => process.env.NODE_ENV === 'development' || post.draft === false)
        .map(post => {
          return <ContentCard key={post.slug} post={post} />;
        })} */}
    </>
  );
}
