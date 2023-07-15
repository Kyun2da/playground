import fs from 'fs';
import path from 'path';

import { Contents } from '@components/pages/Contents';
import { POSTS_PATH, postFilePaths } from '@utils/mdxUtils';
import matter from 'gray-matter';
import { GetStaticPropsContext } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';

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

export async function generateStaticParams() {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }));

  return paths;
}

export async function getData({ params }: GetStaticPropsContext) {
  const postFilePath = path.join(POSTS_PATH, `${params!.slug}.mdx`);

  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

export default async function PostPage({ params }: GetStaticPropsContext) {
  const {
    props: { frontMatter, source },
  } = await getData({ params });

  return <Contents source={source} frontMatter={frontMatter as any} />;
}
