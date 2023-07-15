'use client';

import { Navbar } from '@components/navbar/Navbar';
import { Post } from 'interfaces/Post';

interface Props {
  allPosts: Post[];
}

export function Main({ allPosts }: Props) {
  console.log(allPosts);

  return (
    <>
      <Navbar />
      {/* {allPosts
        .filter(post => process.env.NODE_ENV === 'development' || post.draft === false)
        .map(post => {
          return <ContentCard key={post.slug} post={post} />;
        })} */}
    </>
  );
}
