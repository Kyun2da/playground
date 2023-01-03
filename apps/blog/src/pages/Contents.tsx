import { CategoryBadge } from '@components/CategoryBadge';
import { Comment } from '@components/comment/Comment';
import { MDXComponents } from '@components/mdx/MDXComponents';
import { Layout } from '@layouts/Layout';
import { Col, Image, Text } from '@nextui-org/react';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote';
import { ContentsProps } from 'pages/posts/[slug]';

export function Contents({ source, frontMatter }: ContentsProps) {
  console.log(frontMatter);

  return (
    <Layout title={frontMatter.title} direction="column">
      <header>
        <h1>{frontMatter.title}</h1>
        {frontMatter!.description && <p className="description">{frontMatter.description}</p>}
      </header>
      {frontMatter.categories.map(category => {
        return (
          <CategoryBadge key={category} size="xs">
            {category}
          </CategoryBadge>
        );
      })}
      <Col css={{ justifyContent: 'flex-end', width: 'fit-content', marginLeft: 'auto' }}>
        <Text>{`최초 게시일  :  ${format(new Date(frontMatter.date), 'yyyy년 MM월 dd일')}`}</Text>
        {typeof window === 'object' ? (
          <Text>{`최종 수정일  :  ${format(
            new Date(window.document.lastModified),
            'yyyy년 MM월 dd일'
          )}`}</Text>
        ) : null}
      </Col>
      <Image src={frontMatter.coverImage} height="400px" />

      <main>
        <MDXRemote {...source} components={MDXComponents} />
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }
        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
      <Comment />
    </Layout>
  );
}