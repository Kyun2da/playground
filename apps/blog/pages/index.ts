import { getAllPosts } from '@lib/api';

export { Main as default } from '@pages/Main';

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
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
