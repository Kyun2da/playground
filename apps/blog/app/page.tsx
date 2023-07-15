import { Main } from '@components/pages/Main';
import { Post } from 'interfaces/Post';
import { getAllPosts } from 'utils/api';

export default function Page() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'draft',
    'categories',
    'time',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return <Main allPosts={allPosts as unknown as Post[]} />;
}
