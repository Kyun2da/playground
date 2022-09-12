import { ContentCard } from '@components/ContentCard';
import { Post } from '@interfaces/Post';
import { Layout } from '@layouts/Layout';

interface Props {
  allPosts: Post[];
}

export function Main({ allPosts }: Props) {
  return (
    <Layout>
      {allPosts
        .filter(post => process.env.NODE_ENV === 'development' || post.draft === false)
        .map(post => {
          return (
            <ContentCard key={post.slug} post={post} css={{ marginTop: 16, maxWidth: 1024 }} />
          );
        })}
    </Layout>
  );
}
