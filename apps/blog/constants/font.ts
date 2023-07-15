import { Inter, Noto_Sans_KR } from 'next/font/google';

export const notoSansKR = Noto_Sans_KR({
  weight: ['300', '400', '700', '900'],
  display: 'swap',
  subsets: ['latin'],
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});
