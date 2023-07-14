import fs from 'fs';
import path from 'path';

// import { Contents } from '@pages/Contents';
import matter from 'gray-matter';
import { GetStaticPropsContext } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { postFilePaths, POSTS_PATH } from 'src/utils/mdxUtils';

export interface ContentsProps {
  source: any;
  frontMatter: {
    title: string;
    categories: string[];
    date: string;
    description: string;
    coverImage: string;
  };
}

export default function PostPage() {
  return null;
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
