// eslint-disable-next-line import/order
import { Analytics } from '@vercel/analytics/react';
import '../styles/global.css';

// eslint-disable-next-line import/order
import Script from 'next/script';
import * as gtag from 'utils/gtag';

import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
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
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
