import fs from 'fs';
import path from 'path';

import { Contents } from '@components/pages/Contents';
import matter from 'gray-matter';
import { GetStaticPropsContext } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeKatex from 'rehype-katex';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import type { Metadata } from 'next';
import { TableOfContents } from '@components/toc/table-of-contents';

export interface ContentsProps {
  source: any;
  frontMatter: {
    title: string;
    categories: string[];
    date: string;
    excerpt: string;
    coverImage: string;
    time: number;
  };
}

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {
    props: { frontMatter },
  } = await getData({ params });

  return {
    title: `${frontMatter.title} | Kyun2da Blog`,
    description: frontMatter.excerpt,
    metadataBase: new URL('https://kyun2da.dev'),
    openGraph: {
      images: [
        `https://kyun2da.dev/api/og?title=${frontMatter.title}&imageUrl=${frontMatter.coverImage}`,
      ],
    },
  };
}

async function getData({ params }: GetStaticPropsContext): Promise<{ props: ContentsProps }> {
  const { slug } = await params!;

  const [fileType, fileName] = slug as [DeployType, string];

  const filePath = path.join(POSTS_PATH(fileType), `${fileName}.mdx`);
  const source = fs.readFileSync(filePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      development: process.env.NODE_ENV === 'development',
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [rehypeKatex as any, [rehypePrism, { ignoreMissing: true }]],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data as ContentsProps['frontMatter'],
    },
  };
}

export default async function PostPage({ params }: any) {
  const {
    props: { frontMatter, source },
  } = await getData({ params });

  return (
    <div className="relative max-w-screen-xl mx-auto px-4">
      <div className="lg:pr-64">
        <Contents source={source} frontMatter={frontMatter as any} />
      </div>
      <TableOfContents />
    </div>
  );
}

type DeployType = 'draft' | 'published';

// POSTS_PATH is useful when you want to get the path to a specific file
const POSTS_PATH = (type: DeployType) => {
  if (type === 'draft') {
    return path.join(process.cwd(), '_drafts');
  }

  return path.join(process.cwd(), '_posts');
};
