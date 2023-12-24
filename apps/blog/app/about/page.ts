import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About | Kyun2da Blog',
    description: '허균의 블로그 About',
    metadataBase: new URL('https://kyun2da.dev'),
    openGraph: {
      images: ['https://kyun2da.dev/api/og'],
    },
  };
}

export { About as default } from '@components/pages/About';
