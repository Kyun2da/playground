import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { ThemeProvider } from '@components/theme-provider.tsx/ThemeProvider';
import { notoSansKR } from 'constants/font';
import Script from 'next/script';
import * as gtag from 'utils/gtag';
import '../styles/global.css';
import AutoRefresh from './autoRefresh';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AutoRefresh>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
            crossOrigin="anonymous"
          />
        </head>
        <body className={`${notoSansKR.className}  prose lg:prose-xl dark:prose-invert max-w-full`}>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
          <Analytics />
          {process.env.NODE_ENV === 'production' ? <SpeedInsights /> : null}
        </body>
      </html>
    </AutoRefresh>
  );
}
