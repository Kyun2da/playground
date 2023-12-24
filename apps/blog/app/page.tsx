import { Main } from '@components/pages/Main';
import { Post } from 'interfaces/Post';
import { getAllPosts } from 'utils/api';
import { postCategory } from 'config/site';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home | Kyun2da Blog',
    description: '허균의 블로그',
    metadataBase: new URL('https://kyun2da.dev'),
    openGraph: {
      images: ['https://kyun2da.dev/api/og'],
    },
  };
}

export default function Page() {
  const draftPosts = getAllPosts(postCategory, 'draft');
  const publishedPosts = getAllPosts(postCategory, 'published');

  const allPosts = [...draftPosts, ...publishedPosts];

  return <Main allPosts={allPosts as unknown as Post[]} />;
}
