import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Tags | Kyun2da Blog',
    description: '허균의 블로그 Tags',
    metadataBase: new URL('https://kyun2da.dev'),
    openGraph: {
      images: ['https://kyun2da.dev/api/og'],
    },
  };
}

export { Tags as default } from '@components/pages/Tags';
