'use client';

import { NextUIProvider } from '@nextui-org/react';
import * as gtag from '@utils/gtag';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
// eslint-disable-next-line import/order
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log('hihi');

  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="system" attribute="class">
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
          <NextUIProvider>
            {children}
            <Analytics />
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
