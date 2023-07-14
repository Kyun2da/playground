import { Post } from '@interfaces/Post';
import { Main } from '@pages/Main';
import { getAllPosts } from 'src/utils/api';

export default async function Page() {
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

  return (
    <div>
      <Main allPosts={allPosts as unknown as Post[]} />
    </div>
  );
}
