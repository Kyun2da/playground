import { Main } from '@components/pages/Main';
import { Post } from 'interfaces/Post';
import { getAllPosts } from 'utils/api';

export default function Page() {
  const draftPosts = getAllPosts(postCategory, 'draft');
  const publishedPosts = getAllPosts(postCategory, 'published');

  const allPosts = [...draftPosts, ...publishedPosts];

  return <Main allPosts={allPosts as unknown as Post[]} />;
}

const postCategory = [
  'title',
  'date',
  'slug',
  'draft',
  'categories',
  'time',
  'author',
  'coverImage',
  'excerpt',
];