import { getAllPosts } from 'src/utils/api';

export { Main as default } from '@pages/Main';

export const getStaticProps = async () => {
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

  return {
    props: { allPosts },
  };
};
