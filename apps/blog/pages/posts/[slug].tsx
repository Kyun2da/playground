import fs from 'fs';
import path from 'path';

import { Comment } from '@components/comment/Comment';
import { MDXComponents } from '@components/mdx/MDXComponents';
import { Layout } from '@layouts/Layout';
import { Image } from '@nextui-org/react';
import matter from 'gray-matter';
import { GetStaticPropsContext } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { postFilePaths, POSTS_PATH } from 'src/utils/mdxUtils';

interface Props {
  source: any;
  frontMatter: {
    title: string;
    description: string;
    coverImage: string;
  };
}

export default function PostPage({ source, frontMatter }: Props) {
  console.log(frontMatter);

  return (
    <Layout direction="column">
      <header>
        <div className="post-header">
          <h1>{frontMatter.title}</h1>
          {frontMatter!.description && <p className="description">{frontMatter.description}</p>}
        </div>
      </header>
      <Image src={frontMatter.coverImage} height="400px" />
      <div>2022. 10. 30</div>
      <div>first write : 2022. 10. 28</div>
      <div>first write : 2022. 10. 30</div>
      <div>태그</div>
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

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const postFilePath = path.join(POSTS_PATH, `${params!.slug}.mdx`);

  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [require('@mapbox/rehype-prism')],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
